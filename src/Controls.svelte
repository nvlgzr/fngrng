<script>
  import { gameState } from "./volatileStore";
</script>

<main>
  <section>
    <slot name="anchor" />
    {#if $gameState !== "over"}
      <section class="controls">
        <slot name="controls" />
      </section>
    {/if}
  </section>
</main>

<style lang="postcss">
  main {
    /* Works with section's `position: absolute` */
    @apply relative;
  }
  main:hover {
    @apply text-blue-600;
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
