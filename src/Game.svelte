<script>
  import GameEngine from "./GameEngine.svelte";
  import Display from "./Display.svelte";
  import Input from "./Input.svelte";
  import { initModel } from "./modelTransformations";
  import { maxWords, wordScrollingModeEnabled } from "./persistentStore";
  import { gameState } from "./volatileStore";

  let model;
  let redden = false;
  let text = "";

  $: if (model) {
    redden =
      model.gameState !== "on" ||
      model.challengeView.overallVerdict === "error";

    text =
      model.gameState === "ready"
        ? "start typing to play"
        : model.gameState === "over"
        ? "press enter to reset"
        : model.userText;
  }
</script>

<GameEngine bind:model />

{#if $gameState === "over"}
  Game Over NYI
{:else if model}
  <Display {model} />
{/if}
<Input {redden} {text} />
