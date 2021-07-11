<!-- Cribbed from: https://svelte.dev/tutorial/slot-props -->
<script>
  import { gameState } from "./volatileStore";

  let hovering;

  export function reset() {
    hovering = false;
  }

  function enter() {
    hovering = $gameState !== "on";
  }

  function leave() {
    hovering = false;
  }
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
  <slot {hovering} />
</div>
