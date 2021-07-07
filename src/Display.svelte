<script>
  import Scroller from "./Scroller.svelte";
  import MultiLine from "./MultiLine.svelte";
  import EndGame from "./EndGame.svelte";
  import {
    fullSentenceModeEnabled,
    punctuationToInclude,
    uppercaseAllowed,
    wordScrollingModeEnabled,
  } from "./persistentStore";
  import Toggle from "./Toggle.svelte";
  import { gameState } from "./volatileStore";

  export let model;

  $: aligndown = $wordScrollingModeEnabled;
</script>

<main>
  <section>
    {#if model}
      {#if model.gameState === "over"}
        <div class="aligncenter">
          <EndGame {model} />
        </div>
      {:else if $wordScrollingModeEnabled}
        <div class="aligndown">
          <Scroller {model} />
        </div>
      {:else}
        <div>
          <MultiLine {model} />
        </div>
      {/if}
    {/if}
  </section>
  <section class="controls">
    {#if $gameState !== "over"}
      <Toggle bind:active={$wordScrollingModeEnabled}>Scrolling Mode ⌃S</Toggle>
      <Toggle
        disabled={$fullSentenceModeEnabled}
        bind:active={$uppercaseAllowed}>Capital Letters ⌃C</Toggle
      >
      <Toggle
        disabled={$fullSentenceModeEnabled}
        action={() =>
          ($punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "")}
        active={$punctuationToInclude !== ""}>Punctuation ⌃P</Toggle
      >
      <Toggle bind:active={$fullSentenceModeEnabled}>Full Sentences ⌃F</Toggle>
    {/if}
  </section>
</main>

<style lang="postcss">
  main:hover {
    @apply text-blue-600;
  }

  section {
    @apply flex justify-center;
  }

  .controls {
    @apply opacity-0 cursor-pointer;
  }

  main:hover .controls {
    @apply opacity-100;
  }

  div {
    @apply h-56;
    @apply font-serif;
    @apply text-5xl;
    @apply flex justify-center;
  }

  .aligncenter {
    @apply items-center;
  }

  .aligndown {
    @apply items-end;
  }
</style>
