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
  import { gameState } from "./volatileStore";

  export let model;

  let black = "hsl(0 0% 20%)";
  let blue = "rgba(37, 99, 235)";
</script>

<HoverableControls controlColor={blue} let:transitionDuration>
  <span slot="anchor" let:hovering>
    <div
      style={`--text-color: ${
        hovering && $gameState !== "on" ? blue : black
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
    {#if $gameState !== "on"}
      <Toggle bind:on={$wordScrollingModeEnabled}>Scrolling Mode ⌃S</Toggle>

      <Toggle
        bind:on={$uppercaseAllowed}
        disabled={$fullSentenceModeEnabled}
        disabledTooltip={"Full sentence mode automatically includes Capital Letters"}
      >
        Capital Letters ⌃C
      </Toggle>

      <Toggle
        action={() =>
          ($punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "")}
        on={$punctuationToInclude !== ""}
        disabled={$fullSentenceModeEnabled || $currentLayout === "custom"}
        disabledTooltip={$fullSentenceModeEnabled
          ? "Full sentence mode automatically includes Punctuation"
          : "Not available in Custom layout mode"}
        >Punctuation ⌃P
      </Toggle>

      <Toggle
        bind:on={$fullSentenceModeEnabled}
        disabled={$currentLayout === "custom"}
        disabledTooltip={"Not available in Custom layout mode"}
        >Full Sentences ⌃F</Toggle
      >
    {/if}
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
