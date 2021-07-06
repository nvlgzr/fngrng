<script>
  import Logo from "./Logo.svelte";
  import CurrentLevel from "./CurrentLevel.svelte";
  import WordScore from "./WordScore.svelte";
  import { showFrames } from "./persistentStore";
  import Clock from "./Clock.svelte";

  export let model;

  $: wireframe = $showFrames;
</script>

<nav class:wireframe>
  <Logo />
  <div class="col-span-3 flex justify-between">
    <CurrentLevel />
    <div class="w-64 flex justify-between">
      <div class="mx-4"><WordScore {model} /></div>
      <div class="mx-4"><Clock /></div>
    </div>
  </div>
  <div class="text-right text-blue-500">⌃I</div>
</nav>

<style lang="postcss">
  nav {
    @apply text-4xl text-gray-400;
    @apply py-7 px-10;
    @apply grid gap-4;
    grid-template-columns: minmax(8rem, 15%) 25% 1fr 25% minmax(8rem, 15%);
  }
  .wireframe {
    outline: solid 1px blueviolet;
  }
</style>
