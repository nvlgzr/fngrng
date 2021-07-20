<script>
  import Hoverable from "./Hoverable.svelte";
  import { timeLimitModeEnabled } from "./persistentStore";
  import Toggle from "./Toggle.svelte";
  import { isEditingTimeLimit } from "./volatileStore";
  import Clock from "./Clock.svelte";

  const setTimeLimitMode = () => {
    $timeLimitModeEnabled = true;
    $isEditingTimeLimit = true;
  };
</script>

<!-- Pretty sure this 'reset' ↓ is cruft -->
<Hoverable let:hovering let:reset let:transitionDuration>
  <div class:hovering style={`transition: all ${transitionDuration}`}>
    <Clock done={reset} />
    <span
      class="shortcut"
      style={`opacity: ${
        hovering ? 1 : 0
      }; transition: all ${transitionDuration}`}
    >
      <Toggle action={setTimeLimitMode} on={$timeLimitModeEnabled}>
        Time Limit ⌃T
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
    color: hsl(0, 91%, 71%);
  }

  .shortcut {
    @apply absolute w-max top-10 -left-4;
    @apply text-2xl;
  }
</style>
