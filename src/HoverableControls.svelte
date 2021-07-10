<script>
  import Hoverable from "./Hoverable.svelte";
  import Outline from "./Outline.svelte";
  import { gameState } from "./volatileStore";

  export let color = "inherit";
  export let hoverColor = "inherit";
  export let outline = "hover-only"; // color | color-and-hover | hover-only | none
</script>

<Hoverable let:hovering>
  <main style="--color: {hovering ? hoverColor : color}">
    <section>
      {#if outline === "color"}
        <Outline {color}>
          {outline}
          <slot name="anchor" {hovering} />
        </Outline>
      {:else if outline === "none"}
        <slot name="anchor" {hovering} />
      {:else if outline === "color-and-hover"}
        <Outline color={hovering ? hoverColor : color}>
          <slot name="anchor" {hovering} />
        </Outline>
      {:else}
        <Outline color={hovering ? hoverColor : "transparent"}>
          <slot name="anchor" {hovering} />
        </Outline>
      {/if}

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
    @apply absolute -bottom-14;
  }

  main:hover .controls {
    @apply opacity-100;
  }
</style>
