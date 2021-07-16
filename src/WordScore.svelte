<script>
  import Keydown from "svelte-keydown";
  import ClickToClose from "./ClickToClose.svelte";
  import { timeLimitModeEnabled, maxWords } from "./persistentStore.js";
  import { isEditingWordLimit } from "./volatileStore";

  export let model;
  export let edit;
  export let done = () => {};

  let score;
  let maxScore;

  $: $isEditingWordLimit = edit;

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

{#if $isEditingWordLimit}
  <Keydown on:key={keyListener} />
{/if}

{#if !$timeLimitModeEnabled}
  <div class="w-32">
    {#if edit}
      <span class="float-right"
        >{score}/<input
          on:click|stopPropagation
          bind:this={input}
          value={$maxWords}
          on:change={updateWordLimit}
        /></span
      >
      <ClickToClose
        bind:falseToClose={edit}
        callback={() => done()}
        transparent={true}
      />
    {:else}
      <span class="float-right">{score}/{maxScore}w</span>
    {/if}
  </div>
{:else}
  <span class="float-right">{score}w</span>
{/if}

<style lang="postcss">
  input {
    @apply w-14 p-1 border-r-2 relative z-50;
    @apply text-black text-right;
    margin: -0.25rem;
  }
</style>
