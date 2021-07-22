<script>
  import Keystroke from "./Keystroke.svelte";
  import ClickToClose from "./ClickToClose.svelte";
  import { timeLimitModeEnabled, maxWords } from "./persistentStore.js";
  import { isEditingWordLimit } from "./volatileStore";

  export let model;
  export let done = () => {};

  let score;
  let maxScore;

  $: if (model) {
    const locked = model.locked ?? [];
    const acceptedWords = [...model.hidden, ...locked];
    score = acceptedWords.length;
    maxScore = $maxWords;
  }

  const updateWordLimit = ({ target: { value } }) => {
    const v = parseInt(value);
    if (Number.isInteger(v)) {
      $maxWords = v;
      $isEditingWordLimit = false;
    }
  };

  const wrapUp = ({ detail }) => {
    $isEditingWordLimit = false;
    input.blur();
    if (done) done();
  };

  let input;
  $: if ($isEditingWordLimit && input) {
    input.focus();
    input.select();
  }
</script>

{#if $isEditingWordLimit}
  <Keystroke on:Enter={wrapUp} on:Escape={wrapUp} />
{/if}

{#if !$timeLimitModeEnabled}
  <div class="w-32">
    {#if $isEditingWordLimit}
      <span class="float-right"
        >{score}/<input
          on:click|stopPropagation
          bind:this={input}
          value={$maxWords}
          on:change={updateWordLimit}
        /></span
      >
      <ClickToClose
        bind:falseToClose={$isEditingWordLimit}
        callback={() => done()}
        transparent={true}
      />
    {:else}
      <span class="float-right">{score}/{maxScore}</span>
    {/if}
  </div>
{:else}
  <span class="float-right">{score}</span>
{/if}

<style lang="postcss">
  input {
    @apply w-14 p-1 border-r-2 relative z-50;
    @apply text-coolGray-900 text-right;
    margin: -0.25rem;
  }
</style>
