<script>
  export let shortcut = "";
  export let callback = () => {};
  export let selected = false;
</script>

<div class="menu-item" class:selected on:click={callback}>
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

  .selected {
    @apply filter saturate-50 brightness-75;
  }
</style>
