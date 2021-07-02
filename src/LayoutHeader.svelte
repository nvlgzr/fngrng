<script>
  import { showFrames } from "./persistentStore";

  $: wireframe = $showFrames;
</script>

<div class:wireframe>left-handed dvorak</div>

<style>
  div {
    @apply text-center;
    @apply text-6xl;
    @apply p-6;
    @apply text-gray-400;
  }
  .wireframe {
    outline: solid 1px orange;
  }
</style>
