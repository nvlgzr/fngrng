<script>
  import { currentLayout } from "./persistentStore.js";
  import PreferenceMenu from "./PreferenceMenu.svelte";
</script>

<select bind:value={$currentLayout} autocomplete="off">
  <option value="colemak">⇧⌃1 — Colemak</option>
  <option value="colemakdh">⇧⌃2 — Colemak-DH</option>
  <option disabled />
  <option value="azerty">⇧⌃A — AZERTY</option>
  <option value="dvorak">⇧⌃D — Dvorak</option>
  <option value="lefthandeddvorak">⇧⌃L — Left-handed Dvorak</option>
  <option value="qwerty">⇧⌃Q — QWERTY</option>
  <option value="tarmak">⇧⌃T — Tarmak</option>
  <option value="workman">⇧⌃W — Workman</option>
  <option disabled />
  <option value="custom">⇧⌃C &nbsp; Custom</option>
</select>

<PreferenceMenu />
