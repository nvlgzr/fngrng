<script>
  import { keyboardMap } from "./volatileStore.js";

  let rows = [
    [
      { class: "", id: "Backquote" },
      { class: "", id: "Digit1" },
      { class: "", id: "Digit2" },
      { class: "", id: "Digit3" },
      { class: "", id: "Digit4" },
      { class: "", id: "Digit5" },
      { class: "", id: "Digit6" },
      { class: "", id: "Digit7" },
      { class: "", id: "Digit8" },
      { class: "", id: "Digit9" },
      { class: "", id: "Digit0" },
      { class: "", id: "Minus" },
      { class: "", id: "Equal" },
      { class: "twou", id: "BackSpace" },
    ],
    [
      { class: "onepointfiveu" },
      { class: "", id: "KeyQ" },
      { class: "", id: "KeyW" },
      { class: "", id: "KeyE" },
      { class: "lvl3", id: "KeyR" },
      { class: "lvl3", id: "KeyT" },
      { class: "lvl3", id: "KeyY" },
      { class: "lvl3", id: "KeyU" },
      { class: "lvl5", id: "KeyI" },
      { class: "lvl5", id: "KeyO" },
      { class: "lvl5", id: "KeyP" },
      { class: "", id: "BracketLeft" },
      { class: "", id: "BracketRight" },
      { class: "onepointfiveu", id: "Backslash" },
    ],
    [
      { class: "onepointsevenfiveu" },
      { class: "lvl1", id: "KeyA" },
      { class: "lvl1", id: "KeyS" },
      { class: "lvl1", id: "KeyD" },
      { class: "lvl1 restingPosition", id: "KeyF" },
      { class: "lvl2", id: "KeyG" },
      { class: "lvl2", id: "KeyH" },
      { class: "lvl1 restingPosition", id: "KeyJ" },
      { class: "lvl1", id: "KeyK" },
      { class: "lvl1", id: "KeyL" },
      { class: "lvl1", id: "Semicolon" },
      { class: "", id: "Quote" },
      { class: "twopointtwofiveu" },
    ],
    [
      { class: "twopointtwofiveu" },
      { class: "", id: "KeyZ" },
      { class: "lvl6", id: "KeyX" },
      { class: "lvl6", id: "KeyC" },
      { class: "lvl4", id: "KeyV" },
      { class: "lvl4", id: "KeyB" },
      { class: "lvl4", id: "KeyN" },
      { class: "lvl4", id: "KeyM" },
      { class: "lvl5", id: "Comma" },
      { class: "lvl6", id: "Period" },
      { class: "lvl6", id: "Slash" },
      { class: "twopointsevenfiveu" },
    ],
    [
      { class: "onepointtwofiveu" },
      { class: "onepointtwofiveu" },
      { class: "onepointtwofiveu" },
      { class: "sixpointtwofiveu" },
      { class: "onepointtwofiveu" },
      { class: "onepointtwofiveu" },
      { class: "onepointtwofiveu" },
      { class: "onepointtwofiveu" },
    ],
  ];
</script>

<div>
  {#each rows as row}
    <div class="row">
      {#each row as key}
        <div class={`key letter ${key.class}`} id={key.id}>
          {#if $keyboardMap[key.id]}
            <span class="letter">{$keyboardMap[key.id]}</span>
          {:else}
            <span class="letter">{""}</span>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>
