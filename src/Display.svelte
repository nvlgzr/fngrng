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
  import HoverableControls from "./HoverableControls.svelte";
  import Outline from "./Outline.svelte";

  export let model;

  let black = "hsl(0 0% 20%)";
  let blue = "rgba(37, 99, 235)";
</script>

<HoverableControls controlColor={blue}>
  <span slot="anchor" let:hovering>
    <Outline color={hovering ? blue : "transparent"}>
      <div style={`--text-color: ${hovering ? blue : black}`}>
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
    </Outline>
  </span>

  <span slot="below">
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
    color: var(--text-color);
  }

  .aligncenter {
    @apply items-center;
  }

  .aligndown {
    @apply items-end;
  }
</style>
