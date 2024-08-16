<script>
  import Keystroke from "./Keystroke.svelte";
  import {
    currentLayout,
    customKeyMap,
    currentLevel,
    levelMaps,
  } from "./persistentStore.js";
  import { displayAllGameControls } from "./volatileStore.js";
  import {
    clearLetterFromKeyMap,
    clearLetterFromLevels,
  } from "./pureFunctions.js";
  import { configuredRows, isEditingCustomKeyMap } from "./volatileStore.js";

  $: rows = $configuredRows;

  // ↓ Temp editing state
  let row;
  let col;
  let kId;
  let ltr;

  const beginEdit = ([rowIndex, keyIndex, keyId, letter]) => {
    if ($currentLayout !== "custom") return;

    $isEditingCustomKeyMap = !$isEditingCustomKeyMap;

    if (!isEditingCustomKeyMap || $currentLayout !== "custom") return;

    row = rowIndex;
    col = keyIndex;
    kId = keyId;
    ltr = letter;

    // ↓ ⚠️ HACK: Force re-render to get that Editing glow
    rows = rows;
  };

  const handleKeystroke = ({ detail }) => {
    const reset = () => {
      $isEditingCustomKeyMap = false;
      row = undefined;
      col = undefined;
      kId = undefined;
      ltr = undefined;

      // Re-render
      rows = $configuredRows;
    };

    if (detail === "Escape") {
      $isEditingCustomKeyMap = false;
      $displayAllGameControls = false;
      reset();
      return;
    }

    if (detail === "Backspace") {
      $levelMaps = {
        ...$levelMaps,
        ...{ custom: clearLetterFromLevels(ltr, $levelMaps.custom) },
      };
      $customKeyMap = clearLetterFromKeyMap(ltr, $customKeyMap);
      reset();
      return;
    }

    if (detail.length > 1) return;

    // 1. Update level maps
    const currentLevelIndex = $currentLevel - 1;
    let oldCustomLevels = $levelMaps.custom;

    // Remove both old & new letters from all levels
    let newCustomLevels = clearLetterFromLevels([ltr, detail], oldCustomLevels);

    newCustomLevels[currentLevelIndex] =
      (newCustomLevels[currentLevelIndex] ?? "") + detail;
    $levelMaps = { ...$levelMaps, ...{ custom: newCustomLevels } };

    // 2. Update custom key map
    let newCustomKeyMap = clearLetterFromKeyMap(ltr, $customKeyMap);
    newCustomKeyMap = clearLetterFromKeyMap(detail, $customKeyMap);
    newCustomKeyMap[kId] = detail;
    $customKeyMap = newCustomKeyMap;

    // 3. Reset
    reset();
  };

  const editingClass = (rowIndex, keyIndex) => {
    if ($currentLayout !== "custom") return;
    return rowIndex === row && keyIndex === col ? "editing" : "";
  };
</script>

<!-- Mutually exclusive to Keystroke in GameZone -->
{#if $isEditingCustomKeyMap}
  <Keystroke on:stroke={handleKeystroke} />
{/if}

{#each rows as row, ri}
  <div class="row">
    {#each row as letterConf, ki}
      <button
        on:click={() => beginEdit([ri, ki, letterConf.id, letterConf.letter])}
        class={`key ${letterConf.class} ${editingClass(ri, ki)}`}
        id={letterConf.id}
      >
        <span>{letterConf.letter}</span>
      </button>
    {/each}
  </div>
{/each}

<style lang="postcss">
  span {
    display: block;
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .row {
    display: flex;
    justify-content: space-between;
    height: 4.5vh;
    width: 70vh;
  }

  .key {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-width: 0.1rem;
    border-style: solid;
    height: 80%;
    width: 5.5%;
    opacity: 0.5;
    border-radius: 0.45rem;
    vertical-align: top;
  }

  .homeRow {
    @apply ring-1 ring-coolGray-400 ring-offset-2;
  }

  .editing {
    box-shadow: 0 0 4px 6px white;
    animation: pulse 1.2s infinite;
  }

  .gap {
    border: none;
    background: none;
  }

  .twou {
    /* standard keyboard delete */
    width: 11.75%;
  }

  .onepointfiveu {
    /* standard keyboard tab */
    width: 8.8125%;
  }

  .onepointsevenfiveu {
    /* standard keyboard caps lock */
    width: 10.28125%;
  }

  .twopointtwofiveu {
    /* standard keyboard return */
    width: 13.21875%;
  }

  .twopointsevenfiveu {
    /* standard keyboard shift */
    width: 16.15625%;
  }

  .onepointtwofiveu {
    /* standard keyboard modifier key */
    width: 7.34375%;
  }

  .sixpointtwofiveu {
    /* standard keyboard spacebar */
    width: 36.71875%;
  }

  #mapping-status > span {
    @apply normal-case text-purple-400 text-sm;
  }

  .inactive {
    opacity: 0.6;
    @apply border-coolGray-500;
  }

  .newInThisLevel {
    @apply text-green-500 border-green-500;
    opacity: 1;
    background-color: white;
  }

  .restingPosition {
    text-decoration: underline;
  }

  .active {
    @apply text-coolGray-900 border-coolGray-900;
    opacity: 1;
    background-color: white;
  }

  .punctuation {
    @apply text-purple-800 border-purple-800;
    opacity: 1;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
