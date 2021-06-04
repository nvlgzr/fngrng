<script>
  import { keyboardMap, activeLevels } from "./volatileStore.js";
  import { currentLevel, punctuationToInclude } from "./persistentStore.js";

  function letterLevelIndex(letter) {
    const levels = $activeLevels;
    console.log("⁉️", levels);
    const foundIndex = levels.findIndex((letters) => letters.includes(letter));
    return foundIndex;
  }

  const lettersToCheck = $activeLevels.reduce((acc, curr) => acc + curr, "");
  // const lettersToCheck = "abcdefghij"

  function isIncludedPunctuation(letter) {
    return $punctuationToInclude.includes(letter);
  }

  function letter(keyId) {
    const letter = $keyboardMap[keyId];
    return lettersToCheck.includes(letter) ? letter : "";
  }

  function activeClasses(keyId) {
    const letter = $keyboardMap[keyId];
    if (!lettersToCheck.includes(letter)) return "inactive";

    if (isIncludedPunctuation(letter)) return "punctuation";

    const levelIndex = letterLevelIndex(letter);
    console.log("👻levelIndex", levelIndex);
    if (levelIndex == 0) return "homeRow";
    if (levelIndex == $currentLevel - 1) return "newInThisLevel";
    return "active";
  }

  // Working tip: fold this out of the way ↓
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
        <div class={`key ${key.class} ${activeClasses(key.id)}`} id={key.id}>
          <span class="letter">{letter(key.id)}</span>
        </div>
      {/each}
    </div>
  {/each}
</div>

<!-- <div>
  {#each rows as row}
    <div class="row">
      {#each row as key}
        <div class={`key ${key.class} ${activeClasses(key.id)}`} id={key.id}>
          {#if $keyboardMap[key.id]}
            <span class="letter">{letter(key.id)}</span>
          {:else}
            <span class="inactive letter" />
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div> -->
