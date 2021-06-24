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

  const beginEdit = ([rowIndex, keyIndex, keyId]) => {
    $isEditingCustomKeyMap = !$isEditingCustomKeyMap;

    if (!isEditingCustomKeyMap || !$currentLayout === "custom") return;

    // TODO: Remove current key's letter from levelMaps

    row = rowIndex;
    col = keyIndex;
    kId = keyId;
  };

  const handleKeydown = ({ detail }) => {
    // 1. Update level maps
    const currentLevelIndex = $currentLevel - 1;
    let oldLevelMaps = $levelMaps;
    let oldCustomLevels = oldLevelMaps.custom;

    // Remove letter from all levels
    let newCustomLevels = [];
    for (let [i, level] of oldCustomLevels.entries()) {
      // Remove letter from all levels to prevent dups
      if (i < 6) {
        newCustomLevels.push(leftMinusRight(level, detail).join(""));
      } else {
        newCustomLevels.push(level);
      }
    }
    newCustomLevels[currentLevelIndex] =
      (newCustomLevels[currentLevelIndex] ?? "") + detail;
    $levelMaps = { ...$levelMaps, ...{ custom: newCustomLevels } };

    // 2. Update custom key map
    $customKeyMap = { ...$customKeyMap, [kId]: detail };
    $isEditingCustomKeyMap = false;
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
          on:click={() => beginEdit([ri, ki, letterConf.id])}
          class={`key ${letterConf.class} ${homeRowClass(ri, ki)}`}
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
</style>
