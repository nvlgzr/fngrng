<script>
  import Keydown from "svelte-keydown";
  import {
    currentLayout,
    customKeyMap,
    currentLevel,
    levelMaps,
  } from "./persistentStore.js";
  import { leftMinusRight } from "./pureFunctions.js";
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

      // ↓ ⚠️ HACK: Force re-render to get that Editing glow
      rows = rows;
    };

    if (detail === "Escape") {
      $isEditingCustomKeyMap = false;
      reset();
      return;
    }

    // 1. Update level maps
    const currentLevelIndex = $currentLevel - 1;
    let oldLevelMaps = $levelMaps;
    let oldCustomLevels = oldLevelMaps.custom;

    // Remove letter from all levels
    let newCustomLevels = [];
    for (let [i, level] of oldCustomLevels.entries()) {
      // Remove both letters from all levels to prevent dups
      if (i < 6) {
        newCustomLevels.push(leftMinusRight(level, detail).join(""));
        newCustomLevels.push(leftMinusRight(level, ltr).join(""));
      } else {
        newCustomLevels.push(level);
      }
    }
    newCustomLevels[currentLevelIndex] =
      (newCustomLevels[currentLevelIndex] ?? "") + detail;
    $levelMaps = { ...$levelMaps, ...{ custom: newCustomLevels } };

    // 2. Update custom key map
    // ⚠️ TODO: Remove letter from wherever it was on the level map
    $customKeyMap = { ...$customKeyMap, [kId]: detail };

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

<div>
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
</div>

{#if $currentLayout === "custom"}
  <p>Select a Level, then click any key to edit</p>
{/if}

<style>
  :root {
    --accent-color: hsl(280, 65%, 44%);
    --secondary-accent-color: orange;
    --tertiary-accent-color: green;
  }

  span {
    display: block;
    font-size: 2.2vh;
    font-weight: bold;
    text-transform: uppercase;
  }

  .row {
    display: flex;
    justify-content: space-between;
    height: 5vh;
    width: 75vh;
  }

  .editing {
    box-shadow: 0 0 5px 4px hsl(0deg 0% 100% / 88%);
    animation: pulse 0.8s infinite;
  }

  .key {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0.2vh solid var(--accent-color);
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
    border-color: var(--accent-color);
  }

  .newInThisLevel {
    border-color: var(--tertiary-accent-color);
    color: var(--tertiary-accent-color);
    opacity: 1;
    filter: brightness(1.2);
  }

  .restingPosition {
    text-decoration: underline;
  }

  .active {
    border-color: var(--accent-color);
    color: var(--accent-color);
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
