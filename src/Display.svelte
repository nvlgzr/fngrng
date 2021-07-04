<script>
  import Scroller from "./Scroller.svelte";
  import MultiLine from "./MultiLine.svelte";
  import EndGame from "./EndGame.svelte";
  import { wordScrollingModeEnabled } from "./persistentStore";

  export let model;

  $: aligndown = $wordScrollingModeEnabled;
</script>

{#if model}
  {#if model.gameState === "over"}
    <div class="aligncenter">
      <EndGame {model} />
    </div>
  {:else if $wordScrollingModeEnabled}
    <div class="aligndown">
      <Scroller {model} />
    </div>
  {:else}
    <div>
      <MultiLine {model} />
    </div>
  {/if}
{/if}

<style lang="postcss">
  div {
    @apply h-56;
    @apply font-serif;
    @apply text-5xl;
    @apply flex justify-center;
  }

  .aligncenter {
    @apply items-center;
  }

  .aligndown {
    @apply items-end;
  }
</style>
