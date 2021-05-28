<script>
  import { currentLayout } from "./store.js";
  import PreferenceMenu from "./PreferenceMenu.svelte";

  let layout = $currentLayout;

  function setLayout() {
    currentLayout.set(layout);
  }
</script>

<select bind:value={layout} on:blur={setLayout} autocomplete="off">
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
