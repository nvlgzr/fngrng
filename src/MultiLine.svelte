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
    {#each lines.slice(0, 4) as line}
      <Line {line} />
    {/each}
  {/if}
</section>

<style lang="postcss">
  section {
    mask-image: linear-gradient(to bottom, black 75%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent);
    @apply text-center;
    @apply p-6;
    @apply bg-white rounded;
  }
</style>
