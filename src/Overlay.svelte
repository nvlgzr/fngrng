<script>
  export let falseToClose;
</script>

{#if falseToClose}
  <div on:click={() => (falseToClose = false)}>&nbsp;</div>
{/if}

<style lang="postcss">
  div {
    @apply absolute h-screen w-screen;
    @apply z-10;
    background-color: hsl(0deg 0% 0% / 50%);
  }
</style>
