<script>
  import {
    currentLayout,
    wordScrollingModeEnabled,
  } from "./persistentStore.js";
  import CheatSheet from "./CheatSheet.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import { prepModel, prepView } from "./pureFunctions";
  import { gameState, deleteLatestWord, promptLines } from "./volatileStore.js";

  $: userText = promptWords.userText;
  let promptWords = {};
  let viewSpec = {
    errorDetected: false,
    lines: [],
  };

  // $: console.log("🎑viewSpec", JSON.stringify(viewSpec));

  $: if ($gameState === "ready") {
    if ($promptLines.length) {
      promptWords = prepModel($promptLines);
      viewSpec = prepView("", promptWords);
    }
  }

  const startTrial = (e) => {
    $gameState = "on";

    let challenge = promptWords.challenge;
    const userIn = e.target.value;

    const isLastWord = !(
      promptWords.restOfLine.length || promptWords.remainingLines.length
    );

    const isCorrect = isLastWord
      ? challenge === userIn
      : `${challenge} ` === userIn;

    if (isCorrect) {
      let hidden = promptWords.hidden;
      let locked = promptWords.locked;
      let [firstWord, ...restOfLine] = promptWords.restOfLine;
      let remainingLines = promptWords.remainingLines;

      if (firstWord) {
        locked = [...locked, challenge];
        challenge = firstWord;
      } else {
        // If there's no firstWord, then restOfLine is empty!
        hidden = [...hidden, ...locked, challenge];
        locked = [];
        let [firstRemaining, restRemaining] = remainingLines;

        if (!firstRemaining) {
          // We've run out of words!
          promptWords = {
            hidden: [...hidden, ...locked, challenge],
            userText: "",
          };
          viewSpec = { errorDetected: false, lines: [] };
          $gameState = "over";
          return;
        }
        [firstWord, ...restOfLine] = firstRemaining;
        remainingLines = restRemaining || [];
      }

      promptWords = {
        hidden: hidden,
        locked: locked,
        challenge: firstWord,
        restOfLine: restOfLine,
        remainingLines: remainingLines,
        userText: "",
      };

      viewSpec = prepView("", promptWords);
    } else {
      viewSpec = prepView(userIn, promptWords);
      promptWords = { ...promptWords, userText: userIn };
    }
  };
</script>

<section id="main">
  <h1>{$currentLayout} Club</h1>

  <div class="typingArea">
    <div class={$wordScrollingModeEnabled ? "fade" : ""} id="fadeElement">
      <h2
        class="prompt {$wordScrollingModeEnabled
          ? ''
          : 'paragraph'} {$deleteLatestWord ? '' : 'smoothScroll'}"
      >
        {#each viewSpec.lines as line, i}
          <span class="line">
            {#each line as word, j}
              <span>
                {#each word as comp, k}
                  <span style="color:{comp.color}">{comp.char}</span>
                {/each}
                <span comment="ensures gap between words" />
              </span>
            {/each}
          </span>
        {/each}
      </h2>
    </div>
    <button id="resetButton" class="noDisplay">Reset</button>
    <input
      on:input={startTrial}
      value={userText}
      style={viewSpec.errorDetected ? "color: red" : ""}
      id="userInput"
      type="paragraph"
      spellcheck="false"
    />
  </div>
  <div class="oldtypingArea">
    <div class="oldfade" id="oldfadeElement">
      <h2 class="oldnoDisplay oldprompt" />
    </div>
    <button id="oldresetButton" class="oldnoDisplay">Reset</button>
    <input
      on:input={startTrial}
      id="olduserInput"
      type="paragraph"
      spellcheck="false"
    />
    <ScoreBoard />
  </div>
  <CheatSheet />
  <div class="bottomText">
    <h3>
      Contribute on <a
        href="https://github.com/gnusenpai/colemakclub"
        target="_blank">GitHub</a
      >.
    </h3>
    <h3>
      Sign the <a
        href="https://www.change.org/p/microsoft-add-colemak-as-a-pre-installed-keyboard-layout-to-windows"
        target="_blank">Petition</a
      > to add Colemak to Windows.
    </h3>
  </div>
</section>

<style>
  #main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 90%;
    margin-right: 10vmax;
    margin-bottom: 3vh;
    -webkit-box-flex: 2;
    -ms-flex: 2 1 1000px;
    flex: 2 1 1000px;
  }

  .typingArea {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /*justify-content: center;*/
    width: 67vmin;
    /*height: 30vmin;*/
  }

  .oldtypingArea {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /*justify-content: center;*/
    width: 67vmin;
    /*height: 30vmin;*/
  }

  .fade {
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0)
    );
    /*height: 20%;*/
  }

  .oldfade {
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0)
    );
    /*height: 20%;*/
  }

  .prompt {
    position: relative;
    font-size: 2vmax;
    /*padding: 0 20vh 0 0;*/
    /*width: 100%;*/
    /*color: white;*/
    margin: 10vh 0 0 0;
    letter-spacing: 0.1vmax;
  }

  .oldprompt {
    position: relative;
    font-size: 2vmax;
    /*padding: 0 20vh 0 0;*/
    /*width: 100%;*/
    /*color: white;*/
    margin: 10vh 0 0 0;
    letter-spacing: 0.1vmax;
  }

  .smoothScroll {
    -webkit-transition: left 0.1s linear;
    -o-transition: left 0.1s linear;
    transition: left 0.1s linear;
  }

  .paragraph {
    color: grey;
    word-wrap: break-word;
    width: 103%;
    font-size: 2.4vmin;
    margin: 6.5vmin auto 0 auto;
  }

  .line {
    white-space: nowrap;
  }

  .paragraph .line {
    margin-left: 1.6vmin;
    display: block;
  }

  #resetButton {
    margin: 6vmin auto 4vmin auto;
    width: 30%;
    font-size: 4.5vh;
  }

  #oldresetButton {
    margin: 6vmin auto 4vmin auto;
    width: 30%;
    font-size: 4.5vh;
  }

  .bottomText {
    position: absolute;
    font-size: 1vmin;
    bottom: 0;
    text-align: center;
  }
</style>
