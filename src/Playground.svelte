<script>
  import Keydown from "svelte-keydown";
  import Keystroke from "./Keystroke.svelte";

  let keys = [];
  let combos = [];
  let toggle = "off";

  let held = "";
  let strokes = "";
  let combo = "";
</script>

<Keydown
  on:key={(e) => {
    keys = [...keys, e.detail];
  }}
  on:combo={(e) => {
    combos = [...combos, e.detail];
  }}
  on:Enter={(e) => {
    // console.log(e)
    toggle = toggle === "on" ? "off" : "on";
  }}
/>

<Keystroke
  on:heldKeys={({ detail }) => (held = Array.from(detail).join("+"))}
  on:stroke={({ detail }) => (strokes = strokes + detail)}
  on:combo={({ detail }) => (combo = detail)}
/>

<h1>Keydown</h1>
<p>
  Combos: {combos.join("")}
</p>

<hr />

<p>
  Keys: {keys.join("")}
</p>

<hr />

<p>
  Toggle {toggle} <span style="color:gray;">← Press Enter to toggle</span>
</p>

<hr />

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

<style>
  h1 {
    @apply text-3xl py-2 mt-8;
  }
</style>
