<script>
  export let on;
  export let disabled = false;
  export let action = null;

  const onClick = () => {
    if (action) {
      action();
    } else {
      on = !on;
    }
  };
</script>

<button on:click={onClick} class:on {disabled}><slot /></button>

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
  .on {
    text-decoration: none;
  }
</style>
