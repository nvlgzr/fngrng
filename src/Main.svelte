<script>
  import { currentLayout } from "./persistentStore.js";
  import CheatSheet from "./CheatSheet.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import { gameOn } from "./volatileStore.js";

  $: startTrial = () => ($gameOn = "on");
</script>

<section id="main">
  <h1>{$currentLayout} Club</h1>

  <div class="typingArea">
    <div class="fade" id="fadeElement">
      <h2 class="noDisplay prompt" />
    </div>
    <button id="resetButton" class="noDisplay">Reset</button>
    <input
      on:keydown={startTrial}
      id="userInput"
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

  .fade {
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

  #resetButton {
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
