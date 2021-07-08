<script>
  import { showFrames } from "./persistentStore";

  $: wireframe = $showFrames;

  export let text = "";
  export let redden = false;
</script>

<!--
📝 Note: The &nbsp; prevents the div from flattening when <slot />
         is an empty string "". Otherwise, content below this
         component jumps up and down whenever a word's completed.
-->
<div class:redden class:wireframe>
  {#if text}
    {text}
  {:else}
    &nbsp;
  {/if}
</div>

<style lang="postcss">
  div {
    @apply text-center text-6xl;
    @apply p-16 mb-4;
  }
  .redden {
    @apply text-red-400;
  }
  .wireframe {
    outline: solid 1px greenyellow;
  }
</style>
