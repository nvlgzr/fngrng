<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("reset")}>Reset</button>

<style>
  button {
    margin: 6vmin auto 4vmin auto;
    width: 30%;
    font-size: 4.5vh;
  }
</style>
