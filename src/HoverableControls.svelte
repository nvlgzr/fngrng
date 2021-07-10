<script>
  import Hoverable from "./Hoverable.svelte";
  import { gameState } from "./volatileStore";

  export let color = "inherit";
  export let hoverColor = "inherit";
</script>

<Hoverable let:hovering>
  <main style="--color: {hovering ? hoverColor : color}">
    <section>
      <slot name="anchor" {hovering} />
      {#if $gameState !== "over"}
        <section class="controls">
          <slot name="controls" {hovering} />
        </section>
      {/if}
    </section>
  </main>
</Hoverable>

<style lang="postcss">
  main {
    /* Works with section's `position: absolute` */
    @apply relative;
    color: var(--color);
  }

  section {
    @apply flex justify-center;
  }

  .controls {
    @apply opacity-0 cursor-pointer;
    @apply absolute -bottom-10;
  }

  main:hover .controls {
    @apply opacity-100;
  }
</style>
