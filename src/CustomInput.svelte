<script>
  import CustomLayout from "./CustomLayout.svelte";
</script>

<div class="customInput">
  <div class="buttonHolder">
    <button class="discardButton">Discard</button>
    <button class="saveButton">Save</button>
  </div>
  <CustomLayout />
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

<style>
  .customInput {
    position: absolute;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    left: 23vw;
    top: 23vh;
    z-index: 100;
    border: 0.2vmax solid var(--text-color);
    background-color: var(--menu-background-color);
    height: 37vmax;
    width: 60vmax;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    display: flex;
    -webkit-transition: -webkit-transform 0.15s linear;
    transition: -webkit-transform 0.15s linear;
    -o-transition: transform 0.15s linear;
    transition: transform 0.15s linear;
    transition: transform 0.15s linear, -webkit-transform 0.15s linear;
  }

  .buttonHolder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 90%;
  }

  .saveButton,
  .discardButton {
    font-size: 2.3vmax;
    height: 1vmax;
    width: 1vmax;
    padding: 1vmax;
    border: none;
  }

  .saveButton:hover,
  .discardButton:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  #customUIKeyInput {
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
  }

  #customUILevelSelect {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 2vmax auto 2vmax auto;
    background: red 0.2;
    height: 8vmax;
    width: 100%;
  }

  .customUILevelButton {
    font-size: 2vmax;
    margin: 2vmax auto;
    opacity: 0.8;
    background-color: #191919;
  }

  .customUILevelButton:hover {
    opacity: 1;
    -webkit-filter: brightness(1.5);
    filter: brightness(1.5);
  }

  .currentCustomUILevel {
    border-color: var(--tertiary-accent-color);
    color: var(--tertiary-accent-color);
    background-color: #2f3f2f;
    opacity: 1;
  }
</style>
