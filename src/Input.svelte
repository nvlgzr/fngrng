<script>
  import { showFrames } from "./persistentStore";

  $: wireframe = $showFrames;
</script>

<div class:wireframe>start typing to play</div>

<style lang="postcss">
  div {
    @apply text-center text-6xl text-red-400;
    @apply p-10;
  }
  .wireframe {
    outline: solid 1px greenyellow;
  }
</style>
