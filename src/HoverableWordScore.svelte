<script>
  import Hoverable from "./Hoverable.svelte";
  import { timeLimitModeEnabled } from "./persistentStore";
  import Toggle from "./Toggle.svelte";
  import { displayAllGameControls, isEditingWordLimit } from "./volatileStore";
  import WordScore from "./WordScore.svelte";

  export let model;

  const setWordLimitMode = () => {
    $timeLimitModeEnabled = false;
    $isEditingWordLimit = true;
  };
</script>

<!-- Pretty sure this 'reset' ↓ is cruft -->
<Hoverable let:hovering let:reset let:transitionDuration>
  <div
    class:hovering={hovering || $displayAllGameControls}
    style={`transition: all ${transitionDuration}`}
  >
    <WordScore {model} done={reset} />
    <span
      class="shortcut"
      style={`opacity: ${
        hovering || $displayAllGameControls ? 1 : 0
      }; transition: all ${transitionDuration}`}
    >
      <Toggle
        action={setWordLimitMode}
        on={!$timeLimitModeEnabled}
        tooltip={$timeLimitModeEnabled
          ? "Click to play in Word Limit mode"
          : "Click to edit word limit"}
      >
        Word Limit ⌃W
      </Toggle>
    </span>
  </div>
</Hoverable>

<style lang="postcss">
  div {
    /* Min. needed to prevent "all letters" menu from wrapping ↓ */
    min-width: 8rem;
    @apply relative;
  }

  .hovering {
    @apply text-purple-500;
  }

  .shortcut {
    @apply absolute w-max top-10 -right-1;
    @apply text-2xl;
  }
</style>
