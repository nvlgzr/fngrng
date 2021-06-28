<script>
  import { setContext } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { currentLevel, fullSentenceModeEnabled } from "./persistentStore.js";
  import LevelButton, { LEVELS } from "./LevelButton.svelte";

  setContext(LEVELS, {
    selectLevel: (level) => ($currentLevel = level),
    currentLevel,
  });
</script>

<div>
  {#if !$fullSentenceModeEnabled}
    <div transition:fly={{ x: -100 }}>
      {#each [1, 2, 3, 4, 5, 6, 7] as i}
        {#if i < 7}
          <LevelButton level={i}>{`Level ${i}`}</LevelButton>
        {:else}
          <LevelButton level={i}>{"All Words"}</LevelButton>
        {/if}
      {/each}
    </div>
  {:else}
    <section>
      <p>Full</p>
      <p>Sentence</p>
      <p>Mode</p>
    </section>
  {/if}
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
    z-index: 1000; /* Prevents overlap from Main when window is narrow */
    width: 10vw;
    height: 84vh;
    margin-left: 4vmin;
  }
  section {
    display: inline-table;
    font-size: 2vmax;
    font-weight: bold;
    padding: 0 1.5rem;
    border: solid 1px var(--accent-color);
  }
  p {
    color: var(--accent-color);
    line-height: 50%;
  }
</style>
