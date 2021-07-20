<script>
  import { gameState } from "./volatileStore";

  export let on;
  export let disabled = false;
  export let tooltip = "";
  export let action = null;

  const onClick = () => {
    if (action) {
      action();
    } else {
      on = !on;
    }
  };

  let button;
  $: if ($gameState === "on") button.blur();
</script>

<button
  bind:this={button}
  on:click={onClick}
  class:on
  {disabled}
  title={tooltip}
>
  <slot />
</button>

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
