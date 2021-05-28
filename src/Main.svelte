<script>
  import { currentLayout } from "./store.js";
</script>

<section id="main">
  <h1>{$currentLayout} Club</h1>

  <div class="typingArea">
    <div class="fade" id="fadeElement">
      <h2 class="noDisplay prompt" />
    </div>
    <button id="resetButton" class="noDisplay">Reset</button>
    <input id="userInput" type="paragraph" spellcheck="false" />
    <div id="scoreAndClock">
      <span id="scoreText">0/50</span>
      <span id="timeText">0m :0 s</span>
    </div>
    <div id="testResults" class="transparent">
      <div id="accuracyText" />
      <div id="wpmText" />
    </div>
  </div>
  <div class="cheatsheetContainer">
    <div class="cheatsheet" />
    <div>
      <button class="openUIButton" />
    </div>
  </div>
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

  #scoreAndClock {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    font-size: 5vmin;
  }

  #scoreText,
  #timeText {
    font-family: "Verdana", sans-serif;
  }

  #testResults {
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 8vh;
    flex: 0.8 1 7vh;
  }

  .cheatsheetContainer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .openUIButton {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/c/cc/Edit_Notepad_Icon.svg");
    background-size: cover;
    -webkit-filter: invert(1);
    filter: invert(1);
    position: relative;
    top: -0.3vmax;
    margin: 0 0 0 1vmin;
    border: none;
    height: 2.5vmax;
    width: 2.5vmax;
    display: none;
  }

  .openUIButton:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }

  .bottomText {
    position: absolute;
    font-size: 1vmin;
    bottom: 0;
    text-align: center;
  }
</style>
