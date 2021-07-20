<!-- Cribbed from: https://svelte.dev/tutorial/slot-props -->
<script>
  import { gameState } from "./volatileStore";

  let hovering;

  $: if (gameState !== "on") hovering = false;

  function reset() {
    hovering = false;
  }

  let timeout;
  function move() {
    clearTimeout(timeout);
    hovering = true;
    timeout = setTimeout(() => {
      hovering = false;
    }, 3000);
  }

  function leave() {
    hovering = false;
  }
</script>

<div on:mousemove={move} on:mouseleave={leave}>
  <slot {hovering} {reset} />
</div>
