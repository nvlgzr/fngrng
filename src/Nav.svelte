<script>
  import Logo from "./Logo.svelte";
  import CurrentLevel from "./CurrentLevel.svelte";
  import { showFrames } from "./persistentStore";

  $: wireframe = $showFrames;
</script>

<nav class:wireframe>
  <Logo />
  <div class="col-span-6 flex justify-between">
    <CurrentLevel />
    <div>0/60 0m 0s</div>
  </div>
  <div class="text-right text-blue-500">⌃I</div>
</nav>

<style lang="postcss">
  nav {
    @apply text-4xl text-gray-400;
    @apply py-7 px-10;
    @apply grid grid-cols-8 gap-4;
  }
  .wireframe {
    outline: solid 1px blueviolet;
  }
</style>
