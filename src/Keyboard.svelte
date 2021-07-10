<script>
  import Keydown from "svelte-keydown";
  import {
    currentLayout,
    customKeyMap,
    currentLevel,
    levelMaps,
  } from "./persistentStore.js";
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
    $isEditingCustomKeyMap = !$isEditingCustomKeyMap;

    if (!isEditingCustomKeyMap || $currentLayout !== "custom") return;

    row = rowIndex;
    col = keyIndex;
    kId = keyId;
    ltr = letter;

    // ↓ ⚠️ HACK: Force re-render to get that Editing glow
    rows = rows;
  };

  const handleKeydown = ({ detail }) => {
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

<!-- Mutually exclusive to Keydown in GameZone -->
{#if $isEditingCustomKeyMap}
  <Keydown on:key={handleKeydown} />
{/if}

{#each rows as row, ri}
  <div class="row">
    {#each row as letterConf, ki}
      <div
        on:click={() => beginEdit([ri, ki, letterConf.id, letterConf.letter])}
        class={`key ${letterConf.class} ${editingClass(ri, ki)}`}
        id={letterConf.id}
      >
        <span>{letterConf.letter}</span>
      </div>
    {/each}
  </div>
{/each}

<style lang="postcss">
  :root {
    --default-key-color: hsl(0, 0%, 51%);
    --active-keys: hsl(0, 0%, 28%);
    --new-in-this-level: hsl(161, 94%, 30%);
    --editing-highlight: hsl(0deg 0% 100% / 88%);
  }

  .custom {
    border: 1.5px solid #eb5757;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 16px;
  }

  .colorsync-text {
    color: var(--border-color);
  }

  span {
    display: block;
    font-size: 2.2vh;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    @apply mt-10;
    @apply text-red-400 text-2xl;
  }

  .playable {
    @apply text-blue-400;
    @apply border-blue-400;
  }

  .row {
    display: flex;
    justify-content: space-between;
    height: 5vh;
    width: 75vh;
  }

  .editing {
    box-shadow: 0 0 5px 4px var(--editing-highlight);
    animation: pulse 0.8s infinite;
  }

  .key {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid var(--default-key-color);
    height: 75%;
    width: 5%;
    opacity: 0.5;
    border-radius: 0.45rem;
    vertical-align: top;
  }

  .homeRow {
    box-shadow: 0 0 5px 2px hsl(0deg 0% 100% / 44%);
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

  .inactive {
    opacity: 0.6;
    border-color: var(--default-key-color);
  }

  .newInThisLevel {
    border-color: var(--new-in-this-level);
    color: var(--new-in-this-level);
    opacity: 1;
    filter: brightness(1.2);
  }

  .restingPosition {
    text-decoration: underline;
  }

  .active {
    border-color: var(--active-keys);
    color: var(--active-keys);
    opacity: 1;
    filter: brightness(1.5);
  }

  .punctuation {
    border-color: var(--text-color);
    color: white;
    opacity: 1;
    filter: brightness(1.5);
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
