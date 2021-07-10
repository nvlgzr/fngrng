<!-- Cribbed from: https://svelte.dev/tutorial/slot-props -->
<script>
  let hovering;

  function enter() {
    hovering = true;
  }

  function leave() {
    hovering = false;
  }
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
  <slot {hovering} />
</div>
