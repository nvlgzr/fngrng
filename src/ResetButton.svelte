<script>
  import { reset } from "./modelTransformations.js";

  export let model;
</script>

<button on:click={() => (model = reset(model))}>Reset</button>

<style>
  button {
    margin: 6vmin auto 4vmin auto;
    width: 30%;
    font-size: 4.5vh;
  }
</style>
