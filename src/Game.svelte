<script>
  import GameEngine from "./GameEngine.svelte";
  import { initModel } from "./modelTransformations";
  import PlayTime from "./PlayTime.svelte";
  import { gameState } from "./volatileStore";

  let model = initModel("");
</script>

<GameEngine bind:model />

{#if $gameState === "over"}
  Game Over NYI
{:else}
  <PlayTime {model} />
{/if}
