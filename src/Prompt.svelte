<script>
  import Scroller from "./Scroller.svelte";
  import MultiLine from "./MultiLine.svelte";
  import { wordScrollingModeEnabled } from "./persistentStore";

  export let model;

  $: aligndown = $wordScrollingModeEnabled;
</script>

<div class:aligndown>
  {#if $wordScrollingModeEnabled}
    <Scroller {model} />
  {:else}
    <MultiLine {model} />
  {/if}
</div>

<style lang="postcss">
  div {
    @apply h-56;
    @apply font-serif;
    @apply text-5xl;
    @apply flex justify-center;
  }

  .aligndown {
    @apply items-end;
  }
</style>
