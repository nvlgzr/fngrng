<script>
  import { currentLayout } from "./persistentStore.js";
  import PreferenceMenu from "./PreferenceMenu.svelte";
</script>

<select bind:value={$currentLayout} autocomplete="off">
  <option value="colemak">⇧⌃1 &nbsp; Colemak</option>
  <option value="colemakdh">⇧⌃2 &nbsp; Colemak-DH</option>
  <option disabled />
  <option value="azerty">⇧⌃A &nbsp; AZERTY</option>
  <option value="dvorak">⇧⌃D &nbsp; Dvorak</option>
  <option value="lefthandeddvorak">⇧⌃L &nbsp; Left-handed Dvorak</option>
  <option value="qwerty">⇧⌃Q &nbsp; QWERTY</option>
  <option value="tarmak">⇧⌃T &nbsp; Tarmak</option>
  <option value="workman">⇧⌃W &nbsp; Workman</option>
  <option disabled />
  <option value="custom">⇧⌃C &nbsp; Custom</option>
</select>

<PreferenceMenu />

<style>
  select {
    position: absolute;
    top: 2vmax;
    right: 8vmax;
    height: 3vmax;
    font-size: 1vmax;
    padding: 0 1vmin;
    color: var(--text-color);
    background-color: var(--menu-background-color);
    border-radius: 0.25rem;
    font-family: "Verdana", sans-serif;
  }
</style>
