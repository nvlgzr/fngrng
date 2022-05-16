<script>
  import Scroller from "./Scroller.svelte";
  import MultiLine from "./MultiLine.svelte";
  import EndGame from "./EndGame.svelte";
  import {
    currentLayout,
    fullSentenceModeEnabled,
    punctuationToInclude,
    uppercaseAllowed,
    rotePracticeOn,
    wordScrollingModeEnabled,
  } from "./persistentStore";
  import Toggle from "./Toggle.svelte";
  import HoverableControls from "./HoverableControls.svelte";

  export let model;

  let blue = "hsl(221, 83%, 53%)";
</script>

<HoverableControls class={"text-blue-300"} let:transitionDuration>
  <span slot="anchor" let:hovering>
    <div style={`--duration: ${transitionDuration}`}>
      {#if model}
        {#if model.gameState === "over"}
          <div class:hovering class="aligncenter">
            <EndGame {model} />
          </div>
        {:else if $wordScrollingModeEnabled}
          <div class:hovering class="aligndown">
            <Scroller {model} />
          </div>
        {:else}
          <div class:hovering>
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
      bind:on={$rotePracticeOn}
      disabled={$fullSentenceModeEnabled}
      tooltip={$fullSentenceModeEnabled
        ? "Rote practice is for practicing frequent sequences in concentrated bursts, and is therefore incompatible with whole sentences."
        : $rotePracticeOn
        ? "Click to return to a more diverse practice."
        : "Click to practice frequently-used English words"}
    >
      Rote Practice ⌃R
    </Toggle>

    <Toggle
      action={() =>
        ($punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "")}
      on={$punctuationToInclude !== ""}
      disabled={$fullSentenceModeEnabled || $currentLayout === "custom"}
      tooltip={$currentLayout === "custom"
        ? `Add punctuation to your Custom layout to practice words like "yrs.", "shan't", and "good-looking".\n\nCurrently supported punctuation:  period (.) apostrophe (') and hypen (-)`
        : $fullSentenceModeEnabled
        ? "Full sentence mode automatically includes Punctuation"
        : "Click to enable words with dots, dashes, and apostrophes"}
      >Punctuation ⌃P
    </Toggle>

    <Toggle
      bind:on={$fullSentenceModeEnabled}
      disabled={$currentLayout === "custom"}
      tooltip={$currentLayout === "custom"
        ? "Turn off Custom layout (⇧⌃C) to enable Full Sentences"
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
    @apply text-coolGray-900;
    @apply flex justify-center;
    transition: all var(--duration);
    font-size: 2.75rem;
  }

  .aligncenter {
    @apply items-center;
  }

  .aligndown {
    @apply items-end;
  }
  .hovering {
    @apply text-blue-300;
  }
</style>
