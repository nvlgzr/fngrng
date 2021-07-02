<script>
  import { showFrames } from "./persistentStore";

  $: wireframe = $showFrames;

  export let redden = false;
</script>

<div class:redden class:wireframe><slot /></div>

<style lang="postcss">
  div {
    @apply text-center text-6xl;
    @apply p-10;
  }
  .redden {
    @apply text-red-400;
  }
  .wireframe {
    outline: solid 1px greenyellow;
  }
</style>
