<script>
  export let shortcut = "";
  export let callback = () => {};
</script>

<div class="menu-item" on:click={callback}>
  <slot />
  <div class="shortcut">&nbsp;&nbsp;&nbsp;{shortcut}</div>
</div>

<style lang="postcss">
  .menu-item {
    @apply flex justify-between;
    @apply p-3;
  }

  .menu-item:hover {
    @apply filter brightness-90;
  }
</style>
