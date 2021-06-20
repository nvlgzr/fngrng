<script>
  import Keydown from "svelte-keydown";
  import PrefsOverlay from "./PrefsOverlay.svelte";
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import CustomInput from "./CustomInput.svelte";
  import Main from "./Main.svelte";
  import MappingToggle from "./MappingToggle.svelte";
  import Playground from "./Playground.svelte";
  import Tests from "./Tests.svelte";
  import { testModeEnabled } from "./persistentStore";

  const toggleTests = ({ detail }) => {
    // ⌥T ⇒ †
    if (detail === "†") $testModeEnabled = !$testModeEnabled;
  };
</script>

<Keydown on:key={toggleTests} />

{#if $testModeEnabled}
  <div>
    <Playground />
    <Tests />
  </div>
{:else}
  <PrefsOverlay />
  <TopNav />
  <LevelSelect />
  <CustomInput />
  <Main />
  <MappingToggle />
{/if}

<style>
  div {
    display: grid;
  }
</style>
