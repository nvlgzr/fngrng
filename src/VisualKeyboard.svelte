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

    if (!isEditingCustomKeyMap || !$currentLayout === "custom") return;

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
    return rowIndex === row && keyIndex === col ? "editing" : "";
  };

  const homeRowClass = (rowIndex, keyIndex) => {
    const maybeHomeKey = [1, 2, 3, 4, 7, 8, 9, 10].includes(keyIndex);
    const maybeEditing =
      $isEditingCustomKeyMap && row === rowIndex && col === keyIndex;
    return rowIndex === 2 && maybeHomeKey ? "homeRow" : "";
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
          class={`key ${letterConf.class} ${homeRowClass(
            ri,
            ki
          )} ${editingClass(ri, ki)}`}
          id={letterConf.id}
        >
          <span class="letter">{letterConf.letter}</span>
        </div>
      {/each}
    </div>
  {/each}
</div>

{#if $currentLayout === "custom"}
  <p>Select a Level, then click any key to edit</p>
{/if}

<style>
  .homeRow {
    box-shadow: 0 0 5px 2px hsl(0deg 0% 100% / 44%);
  }

  .editing {
    box-shadow: 0 0 5px 4px hsl(0deg 0% 100% / 88%);
  }
</style>
