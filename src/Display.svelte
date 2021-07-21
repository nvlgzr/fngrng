<script>
  import Scroller from "./Scroller.svelte";
  import MultiLine from "./MultiLine.svelte";
  import EndGame from "./EndGame.svelte";
  import {
    currentLayout,
    fullSentenceModeEnabled,
    punctuationToInclude,
    uppercaseAllowed,
    wordScrollingModeEnabled,
  } from "./persistentStore";
  import Toggle from "./Toggle.svelte";
  import HoverableControls from "./HoverableControls.svelte";

  export let model;

  let black = "hsl(0, 0%, 20%)";
  let blue = "hsl(221, 83%, 53%)";
</script>

<HoverableControls controlColor={blue} let:transitionDuration>
  <span slot="anchor" let:hovering>
    <div
      style={`--text-color: ${
        hovering ? blue : black
      }; --duration: ${transitionDuration}`}
    >
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
    </div>
  </span>

  <span slot="below">
    <Toggle
      bind:on={$wordScrollingModeEnabled}
      tooltip={$wordScrollingModeEnabled
        ? "Click to solve one line at a time"
        : "Click to solve one word at a time"}
    >
      Scrolling Mode ⌃S
    </Toggle>

    <Toggle
      bind:on={$uppercaseAllowed}
      disabled={$fullSentenceModeEnabled}
      tooltip={$fullSentenceModeEnabled
        ? "Full sentence mode automatically includes Capital Letters"
        : $uppercaseAllowed
        ? "Click for only lowercase words"
        : "Click to include Uppercase words"}
    >
      Capital Letters ⌃C
    </Toggle>

    <Toggle
      action={() =>
        ($punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "")}
      on={$punctuationToInclude !== ""}
      disabled={$fullSentenceModeEnabled || $currentLayout === "custom"}
      tooltip={$currentLayout === "custom"
        ? "Not available in Custom layout mode"
        : $fullSentenceModeEnabled
        ? "Full sentence mode automatically includes Punctuation"
        : "Click to enable words with dots, dashes, and apostrophes"}
      >Punctuation ⌃P
    </Toggle>

    <Toggle
      bind:on={$fullSentenceModeEnabled}
      disabled={$currentLayout === "custom"}
      tooltip={$currentLayout === "custom"
        ? "Not available in Custom layout mode"
        : $fullSentenceModeEnabled
        ? "Click to use Levels"
        : "Click to type text from a passage of famous prose"}
    >
      Full Sentences ⌃F
    </Toggle>
  </span>
</HoverableControls>

<style lang="postcss">
  div {
    @apply h-56;
    @apply font-serif;
    @apply text-5xl;
    @apply flex justify-center;
    color: var(--text-color);
    transition: all var(--duration);
  }

  .aligncenter {
    @apply items-center;
  }

  .aligndown {
    @apply items-end;
  }
</style>
