<script>
  import { setContext } from "svelte";
  import { currentLevel } from "./persistentStore.js";
  import LevelButton, { LEVELS } from "./LevelButton.svelte";

  setContext(LEVELS, {
    selectLevel: (level) => ($currentLevel = level),
    currentLevel,
  });
</script>

<div>
  {#each [1, 2, 3, 4, 5, 6, 7] as i}
    {#if i < 7}
      <LevelButton level={i}>{`Level ${i}`}</LevelButton>
    {:else}
      <LevelButton level={i}>{"All Words"}</LevelButton>
    {/if}
  {/each}
</div>

<style>
  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    width: 10vw;
    height: 84vh;
    margin-left: 4vmin;
  }
</style>
