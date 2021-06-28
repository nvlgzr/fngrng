<script>
  import {
    currentLayout,
    keyRemapping,
    useColumnarLayout,
  } from "./persistentStore.js";

  function toggleMapping(e) {
    $keyRemapping = $keyRemapping;
    e.target.blur();
  }

  function toggleColumnar(e) {
    $useColumnarLayout = $useColumnarLayout;
    e.target.blur();
  }
</script>

<div>
  <h6>Map QWERTY to {$currentLayout.toLocaleUpperCase()}</h6>
  <label>
    <input
      bind:checked={$keyRemapping}
      on:change={toggleMapping}
      type="checkbox"
      autocomplete="off"
    />
    <span keyboard-shortcut="⌃K" />
  </label>
  <h6>Use Columnar Layout</h6>
  <label>
    <input
      bind:checked={$useColumnarLayout}
      on:change={toggleColumnar}
      type="checkbox"
      autocomplete="off"
    />
    <span keyboard-shortcut="⌃L" />
  </label>
</div>

<style>
  div {
    position: absolute;
    bottom: 3vh;
    right: -6vh;
    width: 15vw;
    margin-right: 0.5rem;
  }

  div h6 {
    position: relative;
    left: -2.6vmin;
    font-size: 1vmin;
    margin: 1rem 0 2vmin 0;
  }

  /* The switch - the box around the slider */
  label {
    position: relative;
    display: inline-block;
    width: 7.5vmin;
    height: 4.5vmin;
  }

  /* Hide default HTML checkbox */
  label input {
    opacity: 0;
    width: 1;
    height: 0;
  }

  /* The slider */
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #444;
  }

  span:before {
    position: absolute;
    content: attr(keyboard-shortcut);
    color: var(--menu-background-color);
    height: 3vmin;
    width: 3vmin;
    left: 0.75vmin;
    bottom: 0.75vmin;
    background-color: white;
    -webkit-transition: 0.4s;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }

  input:checked + span {
    background-color: var(--accent-color);
  }

  input:focus + span {
    -webkit-box-shadow: 0 0 1px purple;
    box-shadow: 0 0 1px purple;
  }

  input:checked + span:before {
    -webkit-transform: translateX(3vmin);
    -ms-transform: translateX(3vmin);
    transform: translateX(3vmin);
  }
</style>
