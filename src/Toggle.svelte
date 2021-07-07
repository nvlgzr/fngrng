<script>
  export let active;
  export let action = null;

  const onClick = () => {
    if (action) {
      action();
    } else {
      active = !active;
    }
  };
</script>

<div on:click={onClick} class:active><slot /></div>

<style>
  div {
    text-decoration: line-through;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
  }
  .active {
    text-decoration: none;
  }
</style>
