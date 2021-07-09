<script>
  export let baseColor = "transparent";
  export let hoverColor = "transparent";

  let hovering = false;
</script>

<div style="--base:{baseColor};--hover:{hoverColor}">
  <slot {hovering} />
</div>

<style>
  div {
    box-sizing: border-box;
    border-radius: 16px;
    padding: 16px;
    border: 1.5px solid var(--base);
  }
  div:hover {
    border-color: var(--hover);
  }
</style>
