<script>
  import PlayTime from "./PlayTime.svelte";
  import { gameState } from "./volatileStore";
</script>

{#if $gameState === "over"}
  Game Over NYI
{:else}
  <PlayTime />
{/if}
