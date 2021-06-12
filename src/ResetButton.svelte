<script>
  import { gameState } from "./volatileStore";
</script>

<button on:click={() => ($gameState = "ready")}>Reset</button>

<style>
  button {
    margin: 6vmin auto 4vmin auto;
    width: 30%;
    font-size: 4.5vh;
  }
</style>
