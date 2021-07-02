<script>
  import GameEngine from "./GameEngine.svelte";
  import { initModel } from "./modelTransformations";
  import { maxWords, wordScrollingModeEnabled } from "./persistentStore";
  import PlayTime from "./PlayTime.svelte";
  import { gameState } from "./volatileStore";

  let model;
</script>

<GameEngine bind:model />

{#if $gameState === "over"}
  Game Over NYI
{:else if model}
  <PlayTime {model} />
{/if}
