<script>
  import { showFrames } from "./persistentStore";

  $: wireframe = $showFrames;
</script>

<div class:wireframe>Keyboard NYI</div>

<style lang="postcss">
  div {
    @apply text-center p-32 text-9xl text-yellow-400;
  }
  .wireframe {
    outline: solid 1px lightseagreen;
  }
</style>
