<script>
  import Hoverable from "./Hoverable.svelte";
  import { timeLimitModeEnabled } from "./persistentStore";
  import Toggle from "./Toggle.svelte";
  import { isEditingWordLimit } from "./volatileStore";
  import WordScore from "./WordScore.svelte";

  export let model;

  const setWordLimitMode = () => {
    $timeLimitModeEnabled = false;
    $isEditingWordLimit = true;
  };
</script>

<!-- Pretty sure this 'reset' ↓ is cruft -->
<Hoverable let:hovering let:reset let:transitionDuration>
  <div class:hovering style={`transition: all ${transitionDuration}`}>
    <WordScore {model} done={reset} />
    <span
      class="shortcut"
      style={`opacity: ${
        hovering ? 1 : 0
      }; transition: all ${transitionDuration}`}
    >
      <Toggle action={setWordLimitMode} on={!$timeLimitModeEnabled}>
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
    /* TBD: Eliminate duplicate magic number for purple (and others) */
    color: hsl(255, 92%, 76%);
  }

  .shortcut {
    @apply absolute w-max top-10 -left-4;
    @apply text-2xl;
  }
</style>
