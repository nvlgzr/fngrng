<script>
  import { objectize } from "./pureFunctions";
  import Line from "./Line.svelte";

  export let model;

  let lines = [];

  $: if (model?.locked) {
    const firstLine = model?.challenge.length
      ? [
          ...model.locked.map((w) => objectize(w, "green")),
          model.challengeView.charSpecs,
          ...model.restOfLine,
        ]
      : [];

    lines = model?.remainingLines.length
      ? [firstLine, ...model.remainingLines]
      : [firstLine];
  }
</script>

<section>
  {#if lines}
    {#each lines.slice(0, 3) as line}
      <Line {line} />
    {/each}
  {/if}
</section>

<style lang="postcss">
  section {
    mask-image: linear-gradient(to bottom, black 25%, transparent 95%);
    -webkit-mask-image: linear-gradient(to bottom, black 25%, transparent 95%);
    @apply text-center leading-snug;
    @apply p-6;
  }
</style>
