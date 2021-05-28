<script>
  import KeyboardDivs from "./KeyboardDivs.svelte";
</script>

<div class="cheatsheetContainer">
  <KeyboardDivs />
  <div>
    <button class="openUIButton" />
  </div>
</div>

<style>
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
</style>
