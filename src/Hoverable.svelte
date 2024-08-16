<!-- Cribbed from: https://svelte.dev/tutorial/slot-props -->
<script>
  import { gameState } from "./volatileStore";

  export let hovering = false;
  export let transitionDuration = "0";
  //  ↑ Allows clients to opt in to a gentle fade-out when hovering
  //    expires from lack of mouse movement

  $: if (gameState !== "on") hovering = false;

  function reset() {
    hovering = false;
  }

  let timeout;
  function move() {
    clearTimeout(timeout);
    hovering = true;
    transitionDuration = "0";
    timeout = setTimeout(() => {
      hovering = false;
      transitionDuration = "1s";
    }, 3000);
  }

  function leave() {
    hovering = false;
  }
</script>

<div on:mousemove={move} on:mouseleave={leave}>
  <slot {hovering} {reset} {transitionDuration} />
</div>