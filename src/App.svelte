<script>
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
</script>

<TopNav />
<LevelSelect />

<div class="customInput">
  <div class="buttonHolder">
    <button class="discardButton">Discard</button>
    <button class="saveButton">Save</button>
  </div>
  <div id="inputKeyboard" />
  <div id="inputShiftKeyboard" />
  <input type="text" name="customKey" id="customUIKeyInput" />
  <div id="customUILevelSelect">
    <button class="customUILevelButton currentCustomUILevel">lvl1</button>
    <button class="customUILevelButton">lvl2</button>
    <button class="customUILevelButton">lvl3</button>
    <button class="customUILevelButton">lvl4</button>
    <button class="customUILevelButton">lvl5</button>
    <button class="customUILevelButton">lvl6</button>
  </div>
</div>

<section id="main">
  <h1><span id="layoutName">Colemak</span> Club</h1>

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

<div id="mappingToggle">
  <h6>Keyboard Mapping: <span>off</span></h6>
  <label class="switch">
    <input type="checkbox" autocomplete="off" />
    <span class="slider" />
  </label>
</div>
