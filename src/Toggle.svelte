<script>
  export let active;
  export let disabled = false;
  export let action = null;

  const onClick = () => {
    if (action) {
      action();
    } else {
      active = !active;
    }
  };
</script>

<button on:click={onClick} class:active {disabled}><slot /></button>

<style>
  button {
    text-decoration: line-through;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    border: none;
  }
  button:disabled {
    color: gray;
    text-decoration: overline;
  }
  .active {
    text-decoration: none;
  }
</style>
