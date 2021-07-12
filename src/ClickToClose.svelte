<script>
  export let falseToClose;
  export let transparent = false;
  export let callback = () => {};
</script>

{#if falseToClose}
  <div
    on:click={() => {
      falseToClose = false;
      callback();
    }}
    class:transparent
  >
    &nbsp;
  </div>
{/if}

<style lang="postcss">
  div {
    @apply absolute h-screen w-screen left-0 top-0;
    @apply z-10;
    background-color: hsl(0deg 0% 0% / 50%);
  }

  .transparent {
    background-color: transparent;
  }
</style>
