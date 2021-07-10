<script>
  export let color = "transparent";
</script>

<div style="--color:{color};">
  <slot />
</div>

<style>
  div {
    box-sizing: border-box;
    border-radius: 16px;
    padding: 16px;
    border: 1.5px solid var(--color);
  }
</style>
