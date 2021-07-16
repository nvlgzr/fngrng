<script>
  import Keydown from "svelte-keydown";
  import ClickToClose from "./ClickToClose.svelte";
  import { isEditingTimeLimit, secondsSinceStart } from "./volatileStore.js";
  import { timeLimitModeEnabled, maxSeconds } from "./persistentStore.js";

  export let edit;
  export let done = () => {};

  $: $isEditingTimeLimit = edit;

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

  const keyListener = ({ detail }) => {
    function wrapUp() {
      edit = false;
      input.blur();
      if (done) done();
    }

    if (detail === "Enter") {
      wrapUp();
    } else if (detail === "Escape") {
      // TODO: Revert $maxWords on Escape
      //       (Feels super non-urgent, so…might skip it)
      wrapUp();
    }
  };

  let input;
  $: if (edit && input) {
    input.focus();
    input.select();
  }
</script>

{#if $isEditingTimeLimit}
  <Keydown on:key={keyListener} />
{/if}

{#if edit}
  <div class="flex">
    <input
      class="w-20 text-right mr-2"
      bind:this={input}
      value={$maxSeconds}
      on:change={updateTimeLimit}
    /> seconds
  </div>
  <ClickToClose
    bind:falseToClose={edit}
    callback={() => done()}
    transparent={true}
  />
{:else}
  <div class="w-48 float-left">
    {minutes}m {seconds}s
  </div>
{/if}
