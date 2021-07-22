<script>
  export let color = "";

  export { className as class };
  let className = "";
</script>

<div class={className} style="--color:{color};">
  <slot />
</div>

<style lang="postcss">
  div {
    box-sizing: border-box;
    border-radius: 16px;
    padding: 16px;
    @apply border-2;
  }
</style>
