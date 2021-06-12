<script>
  import {
    currentLayout,
    wordScrollingModeEnabled,
  } from "./persistentStore.js";
  import CheatSheet from "./CheatSheet.svelte";
  import GameZone from "./GameZone.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import { gameState, scoreBoard, promptLines } from "./volatileStore.js";

  let userText = "";

  const handleInputChange = (input, promptArray) => {
    return input;
  };

  $: oldstartTrial = (e) => {
    $gameState = "on";
    userText = handleInputChange(e.target.value, $promptLines);
  };
</script>

<section id="main">
  <h1>{$currentLayout} Club</h1>

  <GameZone />

  <div class="oldtypingArea">
    <div class="oldfade" id="oldfadeElement">
      <h2 class="oldnoDisplay oldprompt" />
    </div>
    <button id="oldresetButton" class="oldnoDisplay">Reset</button>
    <input
      on:keydown={oldstartTrial}
      id="olduserInput"
      type="text"
      spellcheck="false"
    />
    <ScoreBoard model={$scoreBoard} />
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

  .oldtypingArea {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 67vmin;
  }

  .oldfade {
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0)
    );
  }

  .oldprompt {
    position: relative;
    font-size: 2vmax;
    margin: 10vh 0 0 0;
    letter-spacing: 0.1vmax;
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
