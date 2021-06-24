<script>
  import { currentLayout } from "./persistentStore.js";
  import { configuredRows } from "./volatileStore.js";

  $: rows = $configuredRows;

  const homeRowClass = (rowIndex, keyIndex) => {
    const maybeHomeKey = [1, 2, 3, 4, 7, 8, 9, 10].includes(keyIndex);
    return rowIndex === 2 && maybeHomeKey ? "homeRow" : "";
  };
</script>

<div>
  {#each rows as row, ri}
    <div class="row">
      {#each row as letterConf, ki}
        <div
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
