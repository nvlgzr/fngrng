<script>
  import { showFrames } from "./persistentStore";
  import { objectize } from "./pureFunctions";
  import Line from "./Line.svelte";

  $: wireframe = $showFrames;

  export let model;

  let deleteLatestWord = false;
  let lines = [];

  console.log(model);

  $: firstLine = model?.challenge.length
    ? [
        ...model.locked.map((w) => objectize(w, "green")),
        model.challengeView.charSpecs,
        ...model.restOfLine,
      ]
    : [];
  $: lines = model?.remainingLines.length
    ? [firstLine, ...model.remainingLines]
    : [firstLine];
</script>

<section class:wireframe class={deleteLatestWord ? "" : "smoothScroll"}>
  {#if lines}
    {#each lines.slice(0, 3) as line}
      <Line {line} />
    {/each}
  {/if}
</section>

<style lang="postcss">
  .smoothScroll {
    transition: left 0.1s linear;
  }
  section {
    @apply text-center;
    @apply font-serif;
    @apply text-5xl;
    @apply p-6;
    @apply w-prompt;
  }
  .wireframe {
    outline: solid 1px goldenrod;
  }
</style>
