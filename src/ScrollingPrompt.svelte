<script>
  import { gameState, baseModel } from "./volatileStore.js";
  import SingleWord from "./SingleWord.svelte";
  import { colorize, objectize } from "./pureFunctions.js";

  export let userText;

  let words = [
    colorize(userText, $baseModel.challenge),
    ...objectize($baseModel.restOfLine),
  ];

  let transitioning = false;
  let firstWordEl;
  let firstWordOffset = 0;

  $: {
    if ($gameState === "on") {
      if ($baseModel.advancePrompt) {
        advance();
      } else {
        words = [
          colorize(userText, $baseModel.challenge),
          ...objectize($baseModel.restOfLine),
        ];
      }
    }
  }

  const advance = () => {
    const previousChallenge = $baseModel.challenge;
    const [newChallenge, ...rest] = $baseModel.restOfLine;
    const previouslyHidden = $baseModel.hidden;
    if (!newChallenge) {
      $gameState = "over";
    }
    const nextModel = {
      ...$baseModel,
      advancePrompt: false,
      hidden: [...previouslyHidden, previousChallenge],
      challenge: newChallenge,
      restOfLine: rest,
    };

    transitioning = true;
    firstWordOffset = (firstWordEl && firstWordEl.offsetWidth) || 0;
    setTimeout(() => {
      $baseModel = nextModel;
      transitioning = false;
      firstWordOffset = 0;
    }, 120); // 120ms is just slightly longer than 0.1s transition time.
  };
</script>

<div class="fade">
  <h2
    class={`prompt ${transitioning ? "scroll" : ""}`}
    style={`left: ${transitioning ? -firstWordOffset : 0}px`}
  >
    {#each words as word, i (word)}
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
    mask-image: linear-gradient(
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
