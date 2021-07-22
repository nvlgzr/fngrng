<script>
  import Logo from "./Logo.svelte";
  import CurrentLevel from "./CurrentLevel.svelte";
  import HoverableWordScore from "./HoverableWordScore.svelte";
  import HoverableClock from "./HoverableClock.svelte";
  import Info from "./Info.svelte";

  export let model;
</script>

<nav>
  <Logo />
  <div class="col-span-3 flex justify-between">
    <CurrentLevel />
    <div class="w-64 flex justify-between">
      <div class="mx-4"><HoverableWordScore {model} /></div>
      <div class="mx-4"><HoverableClock /></div>
    </div>
  </div>
  <div class="text-right text-blue-400"><Info /></div>
</nav>

<style lang="postcss">
  nav {
    @apply text-4xl text-coolGray-400;
    @apply py-7 px-10;
    @apply grid gap-4;
    grid-template-columns: minmax(8rem, 15%) 25% 1fr 25% minmax(8rem, 15%);
  }
</style>
