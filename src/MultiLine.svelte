<script>
  import { showFrames } from "./persistentStore";
  import { objectize } from "./pureFunctions";
  import Line from "./Line.svelte";

  $: wireframe = $showFrames;

  export let model;

  let deleteLatestWord = false;
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

<section class:wireframe>
  {#if lines}
    {#each lines.slice(0, 4) as line}
      <Line {line} />
    {/each}
  {/if}
</section>

<style lang="postcss">
  section {
    @apply text-center;
    @apply p-6;
    @apply bg-white rounded;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0)
    );
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0)
    );
  }
  .wireframe {
    outline: solid 1px goldenrod;
  }
</style>
