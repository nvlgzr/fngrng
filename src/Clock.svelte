<script>
  import Keystroke from "./Keystroke.svelte";
  import ClickToClose from "./ClickToClose.svelte";
  import { isEditingTimeLimit, secondsSinceStart } from "./volatileStore.js";
  import { timeLimitModeEnabled, maxSeconds } from "./persistentStore.js";

  export let done = () => {};

  $: secondsAdjustedForDirection = $timeLimitModeEnabled
    ? Math.max($maxSeconds - $secondsSinceStart, 0)
    : $secondsSinceStart;

  $: minutes = Math.floor(secondsAdjustedForDirection / 60);
  $: seconds = secondsAdjustedForDirection % 60;

  const updateTimeLimit = ({ target: { value } }) => {
    const v = parseInt(value);
    if (Number.isInteger(v)) {
      $maxSeconds = v;
      $isEditingTimeLimit = false;
    }
  };

  const wrapUp = ({ detail }) => {
    $isEditingTimeLimit = false;
    input.blur();
    if (done) done();
  };

  let input;
  $: if ($isEditingTimeLimit && input) {
    input.focus();
    input.select();
  }
</script>

{#if $isEditingTimeLimit}
  <Keystroke on:Enter={wrapUp} on:Escape={wrapUp} />

  <div class="flex">
    <input bind:this={input} value={$maxSeconds} on:change={updateTimeLimit} /> seconds
  </div>
  <ClickToClose
    bind:falseToClose={$isEditingTimeLimit}
    callback={() => done()}
    transparent={true}
  />
{:else}
  <div class="md:w-max float-left">
    {minutes}m {seconds}s
  </div>
{/if}

<style lang="postcss">
  input {
    @apply w-20 mr-2;
    @apply text-coolGray-900 text-right;
  }
</style>
