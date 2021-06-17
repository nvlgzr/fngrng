<script>
  import { objectize } from "./pureFunctions";
  import SingleWord from "./SingleWord.svelte";
  import { emptyBaseModel } from "./baseModel.js";

  export const updateModel = (newModel) => {
    const advance =
      baseModel.hidden.length < newModel.hidden.length ||
      baseModel.challenge !== newModel.challenge;
    if (advance) {
      transitioning = true;
      firstWordOffset = (firstWordEl && firstWordEl.offsetWidth) || 0;
      setTimeout(() => {
        baseModel = newModel;
        transitioning = false;
        firstWordOffset = 0;
      }, 120); // 120ms is just slightly longer than 0.1s transition time.
    } else {
      baseModel = newModel;
    }
  };

  let baseModel = emptyBaseModel;

  $: line = [baseModel.coloredChallenge, ...objectize(baseModel.restOfLine)];

  let transitioning = false;
  let firstWordEl;
  let firstWordOffset = 0;
</script>

<div class="fade">
  <h2
    class={`prompt ${transitioning ? "scroll" : ""}`}
    style={`left: ${transitioning ? -firstWordOffset : 0}px`}
  >
    {#each line as word, i (word)}
      {#if i === 0}
        <span bind:this={firstWordEl} style={transitioning ? "opacity:0" : ""}>
          <SingleWord {word} />
        </span>
      {:else}
        <span>
          <SingleWord {word} />
        </span>
      {/if}
    {/each}
  </h2>
</div>

<style>
  .fade {
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0)
    );
  }

  h2 {
    white-space: nowrap;
  }

  .prompt {
    position: relative;
    font-size: 2vmax;
    margin: 10vh 0 0 0;
    letter-spacing: 0.1vmax;
  }

  .scroll {
    /*
    ⚠️ Changing 0.1s? ↓
    Make sure to also change 120ms in setTimeout! ↑
    */
    transition: left 0.1s linear;
  }
</style>
