<script>
  import Hoverable from "./Hoverable.svelte";
  import { gameState } from "./volatileStore";

  export let controlColor = "";
</script>

<Hoverable let:hovering>
  <main style="--control-color:{controlColor}">
    <section>
      {#if $gameState !== "over" && hovering}
        <section class="above">
          <slot name="above" {hovering} />
        </section>
      {/if}

      <slot name="anchor" {hovering} />

      {#if $gameState !== "over" && hovering}
        <section class="below">
          <slot name="below" {hovering} />
        </section>
      {/if}
    </section>
  </main>
</Hoverable>

<style lang="postcss">
  main {
    /* Works with section's `position: absolute` */
    @apply relative;
    color: var(--control-color);
  }

  section {
    @apply flex justify-center;
  }

  .below {
    @apply opacity-0 cursor-pointer;
    @apply absolute -bottom-12;
  }

  main:hover .below {
    @apply opacity-100;
  }

  .above {
    @apply opacity-0 cursor-pointer;
    @apply absolute -top-12;
  }

  main:hover .above {
    @apply opacity-100;
  }
</style>
