<script>
  import { objectize } from "./pureFunctions";
  import SingleLine from "./SingleLine.svelte";

  export let model;

  let deleteLatestWord = false;
  let lines = [];

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

<div>
  <h2 class="prompt paragraph {deleteLatestWord ? '' : 'smoothScroll'}">
    {#if lines}
      {#each lines.slice(0, 3) as line}
        <SingleLine {line} />
      {/each}
    {/if}
  </h2>
</div>

<style>
  .prompt {
    position: relative;
    font-size: 2vmax;
    margin: 10vh 0 0 0;
    letter-spacing: 0.1vmax;
  }

  .smoothScroll {
    -webkit-transition: left 0.1s linear;
    -o-transition: left 0.1s linear;
    transition: left 0.1s linear;
  }

  .paragraph {
    color: grey;
    word-wrap: break-word;
    width: 103%;
    font-size: 2.4vmin;
    margin: 6.5vmin auto 0 auto;
  }
</style>
