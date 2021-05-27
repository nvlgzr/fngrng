<script>
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import CustomInput from "./CustomInput.svelte";
</script>

<TopNav />
<LevelSelect />
<CustomInput />

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
