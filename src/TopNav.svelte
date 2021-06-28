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
