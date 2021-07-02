<script>
  import Scroller from "./Scroller.svelte";
  import MultiLine from "./MultiLine.svelte";
  import { wordScrollingModeEnabled } from "./persistentStore";

  export let model;
</script>

<div>
  {#if $wordScrollingModeEnabled}
    <Scroller {model} />
  {:else}
    <MultiLine {model} />
  {/if}
</div>

<style>
  div {
    @apply h-56;
  }
</style>
