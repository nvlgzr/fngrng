<script>
  import { gameState } from "./volatileStore";

  export let text = "";
  export let redden = false;
</script>

<!--
📝 Note: The &nbsp; prevents the div from flattening when <slot />
         is an empty string "". Otherwise, content below this
         component jumps up and down whenever a word's completed.
-->
<div class:redden>
  {#if text}
    {text}
  {:else}
    &nbsp;
  {/if}
  {#if $gameState === "on"}
    <span> | </span>
  {/if}
</div>

<style lang="postcss">
  div {
    @apply text-center text-6xl;
    @apply p-16 mb-4;
  }
  span {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    animation: blink 0.9s infinite;
    @apply font-extralight relative -left-4;
  }
  .redden {
    @apply text-red-400;
  }
  @keyframes blink {
    0% {
      opacity: 0.6;
    }
    60% {
      opacity: 0.6;
    }
    100% {
      opacity: 0;
    }
  }
</style>
