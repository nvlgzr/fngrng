<script>
  import { showFrames } from "./persistentStore";

  $: wireframe = $showFrames;
</script>

<section class:wireframe>
  <div>stated stood routes recorded heat crash</div>
  <div>hat horses assured statutory trash trees</div>
  <div>hours started addressed tours houses</div>
</section>

<style lang="postcss">
  section {
    @apply text-center;
    @apply font-serif;
    @apply text-5xl;
    @apply p-6;
    @apply grid grid-cols-8 gap-4;
  }
  div {
    @apply col-start-3 col-span-6;
    @apply text-left;
  }
  .wireframe {
    outline: solid 1px goldenrod;
  }
</style>
