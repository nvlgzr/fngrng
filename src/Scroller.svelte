<script>
  import { objectize } from "./pureFunctions";
  import SingleWord from "./SingleWord.svelte";

  export let model;

  let line = [];
  let viewModel = {
    hidden: [],
    challenge: "",
    challengeView: { charSpecs: [] },
    restOfLine: [],
  };

  $: if (viewModel.challengeView?.charSpecs?.length) {
    line = [
      viewModel.challengeView.charSpecs,
      ...objectize(viewModel.restOfLine),
    ];
  } else {
    line = [];
  }

  $: {
    const advance =
      viewModel.hidden.length < model.hidden.length ||
      viewModel.challenge !== model.challenge;

    if (advance) {
      scroll = true;
      firstWordOffset = (firstWordEl && firstWordEl.offsetWidth) || 0;
      setTimeout(() => {
        viewModel = model;
        scroll = false;
        firstWordOffset = 0;
      }, 120); // 120ms is just slightly longer than 0.1s transition time.
    } else {
      viewModel = model;
    }
  }

  let scroll = false;
  let firstWordEl;
  let firstWordOffset = 0;
</script>

<section>
  <div class:scroll style={`left: ${scroll ? -firstWordOffset : 0}px`}>
    {#each line.slice(0, 13) as word, i (word)}
      {#if i === 0}
        <span bind:this={firstWordEl} style={scroll ? "opacity:0" : ""}>
          <SingleWord {word} />
        </span>
      {:else}
        <span>
          <SingleWord {word} />
        </span>
      {/if}
    {/each}
  </div>
</section>

<style lang="postcss">
  section {
    @apply w-prompt h-14;
    mask-image: linear-gradient(to right, black 75%, transparent);
    -webkit-mask-image: linear-gradient(to right, black 75%, transparent);
  }
  div {
    @apply whitespace-nowrap relative overflow-hidden h-14 leading-none;
  }
  .scroll {
    /*
    ⚠️ Changing 0.1s? ↓
    Make sure to also change 120ms in setTimeout! ↑
    */
    transition: left 0.1s linear;
  }
</style>
