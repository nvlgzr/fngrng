<script>
  import { keyRemapping } from "./store.js";

  let remap = $keyRemapping;

  function toggleMapping(e) {
    keyRemapping.set(remap);
  }
</script>

<div id="mappingToggle">
  <h6>Keyboard Mapping: {remap ? "on" : "off"}</h6>
  <label class="switch">
    <input
      bind:checked={remap}
      on:change={toggleMapping}
      type="checkbox"
      autocomplete="off"
    />
    <span class="slider" />
  </label>
</div>

<style>
  #mappingToggle {
    position: absolute;
    bottom: 3vh;
    right: -6vh;
    width: 15vw;
  }

  #mappingToggle h6 {
    position: relative;
    left: -2.6vmin;
    font-size: 1vmin;
    margin: 0 0 2vmin 0;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 7.5vmin;
    height: 4.5vmin;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 1;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #444;
  }

  .slider:before {
    position: absolute;
    content: "";
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

  input:checked + .slider {
    background-color: var(--accent-color);
  }

  input:focus + .slider {
    -webkit-box-shadow: 0 0 1px purple;
    box-shadow: 0 0 1px purple;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(3vmin);
    -ms-transform: translateX(3vmin);
    transform: translateX(3vmin);
  }
</style>
