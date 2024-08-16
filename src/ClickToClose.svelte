<script>
  import { fade } from "svelte/transition";
  export let falseToClose;
  export let transparent = false;
  export let callback = () => {};
</script>

{#if falseToClose}
  <button
    transition:fade
    on:click={() => {
      falseToClose = false;
      callback();
    }}
    class:transparent
  >
    &nbsp;
  </button>
{/if}

<style lang="postcss">
  button {
    @apply bg-coolGray-500 bg-opacity-50;
    @apply fixed h-screen w-screen left-0 top-0;
    @apply z-10;
  }

  .transparent {
    background-color: transparent;
  }
</style>
