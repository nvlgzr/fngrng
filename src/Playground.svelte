<script>
  import Keystroke from "./Keystroke.svelte";

  let held = "";
  let strokes = "";
  let combo = "";
  let toggle = false;
</script>

<Keystroke
  on:heldKeys={({ detail }) => (held = Array.from(detail).join("+"))}
  on:stroke={({ detail }) => (strokes = strokes + detail)}
  on:combo={({ detail }) => (combo = detail)}
  on:Enter={() => (toggle = !toggle)}
/>

<h1>Keystroke</h1>
<p>
  Held Keys: {held}
</p>
<p>
  Keys: {strokes}
</p>
<p>
  Combo: {combo}
</p>
<p>
  Toggle: {toggle ? "on" : "off"}
</p>

<style>
  h1 {
    @apply text-3xl py-2 mt-8;
  }
</style>
