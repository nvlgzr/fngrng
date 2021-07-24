<script>
  import PrettyPrint from "./PrettyPrint.svelte";
  import {
    addSymbol,
    initForLineByLine,
    initForScrolling,
  } from "./modelTransformations";

  let scroller = initForScrolling("11 22 33");
  scroller = addSymbol(scroller, "1");
  scroller = addSymbol(scroller, "1");
  scroller = addSymbol(scroller, " ");
  scroller = addSymbol(scroller, "2");
  scroller = addSymbol(scroller, "2");
  scroller = addSymbol(scroller, " ");
  scroller = addSymbol(scroller, "3");
  scroller = addSymbol(scroller, "3");

  let liner = initForLineByLine(["11 22 33"]);
  liner = addSymbol(liner, "1");
  liner = addSymbol(liner, "1");
  liner = addSymbol(liner, " ");
  liner = addSymbol(liner, "2");
  liner = addSymbol(liner, "2");
  liner = addSymbol(liner, " ");
  liner = addSymbol(liner, "3");
  liner = addSymbol(liner, "3");

  $: locked = scroller.locked ?? [];
  $: acceptedWords = [...scroller.hidden, ...locked];
  $: totalKeyPresses = scroller.totalKeyPresses;
  $: accurateKeyPresses = acceptedWords.join("").length;
  $: rawAccuracy = (100 * accurateKeyPresses) / totalKeyPresses;
  $: percentAccuracy = `${rawAccuracy.toFixed(1)}%`;
  $: accuracy =
    percentAccuracy === "100.0%" ? "Perfect Accuracy!" : percentAccuracy;

  $: s_locked = liner.locked ?? [];
  $: s_acceptedWords = [...liner.hidden, ...s_locked];
  $: s_totalKeyPresses = liner.totalKeyPresses;
  $: s_accurateKeyPresses = s_acceptedWords.join("").length;
  $: s_rawAccuracy = (100 * s_accurateKeyPresses) / s_totalKeyPresses;
  $: s_percentAccuracy = `${s_rawAccuracy.toFixed(1)}%`;
  $: s_accuracy =
    percentAccuracy === "100.0%" ? "Perfect Accuracy!" : percentAccuracy;
</script>

<PrettyPrint javascript={scroller} />

<div>{acceptedWords}</div>

<h1>Scroller</h1>
<div>
  You typed {totalKeyPresses}, {accurateKeyPresses - totalKeyPresses} more than necessary
</div>
<div>rawAccuracy: {percentAccuracy}</div>

<hr />

<h1>Liner</h1>
<div>
  You typed {s_totalKeyPresses}, {s_accurateKeyPresses - s_totalKeyPresses} more
  than necessary
</div>
<div>rawAccuracy: {s_percentAccuracy}</div>

<style lang="postcss">
  h1 {
    @apply text-lg py-2;
  }
  div {
    @apply text-sm;
  }
</style>
