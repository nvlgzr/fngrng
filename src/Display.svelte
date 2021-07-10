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
  import HoverableControls from "./HoverableControls.svelte";

  export let model;

  $: aligndown = $wordScrollingModeEnabled;

  let blue = "rgba(37, 99, 235)";
</script>

<HoverableControls hoverColor={blue}>
  <span slot="anchor">
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
  </span>

  <span slot="controls">
    <Toggle bind:on={$wordScrollingModeEnabled}>Scrolling Mode ⌃S</Toggle>

    <Toggle bind:on={$uppercaseAllowed} disabled={$fullSentenceModeEnabled}>
      Capital Letters ⌃C
    </Toggle>

    <Toggle
      action={() =>
        ($punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "")}
      on={$punctuationToInclude !== ""}
      disabled={$fullSentenceModeEnabled}
      >Punctuation ⌃P
    </Toggle>

    <Toggle bind:on={$fullSentenceModeEnabled}>Full Sentences ⌃F</Toggle>
  </span>
</HoverableControls>

<style lang="postcss">
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
