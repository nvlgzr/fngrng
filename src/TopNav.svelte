<script>
  import { currentLayout } from "./persistentStore.js";
  import PreferenceMenu from "./PreferenceMenu.svelte";
</script>

<select bind:value={$currentLayout} autocomplete="off">
  <option value="colemak">Colemak</option>
  <option value="colemakdh">Colemak-DH</option>
  <option disabled />
  <option value="azerty">AZERTY</option>
  <option value="dvorak">Dvorak</option>
  <option value="lefthandeddvorak">Left-handed Dvorak</option>
  <option value="qwerty">QWERTY</option>
  <option value="tarmak">Tarmak</option>
  <option value="workman">Workman</option>
  <option disabled />
  <option value="custom">Custom</option>
</select>

<PreferenceMenu />
