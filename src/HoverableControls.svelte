<script>
  import Hoverable from "./Hoverable.svelte";

  // Class passing pattern discovered here: https://svelte.dev/repl/299bec14c8154ad89eb53f3d18ba2a37?version=3.24.0
  export { className as class };
  let className = "";
</script>

<Hoverable let:hovering let:transitionDuration>
  <main class={className}>
    <section>
      <section
        class="above"
        style={`opacity: ${
          hovering ? 1 : 0
        }; transition: all ${transitionDuration}`}
      >
        <slot name="above" {hovering} />
      </section>

      <slot name="anchor" {hovering} {transitionDuration} />

      <section
        class="below"
        style={`opacity: ${
          hovering ? 1 : 0
        }; transition: all ${transitionDuration}`}
      >
        <slot name="below" {hovering} />
      </section>
    </section>
  </main>
</Hoverable>

<style lang="postcss">
  main {
    /* Works with section's `position: absolute` */
    @apply relative;
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
