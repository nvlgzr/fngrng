<script>
  import Notifications from "svelte-notifications";
  import Keydown from "svelte-keydown";
  import PrefsOverlay from "./PrefsOverlay.svelte";
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import Main from "./Main.svelte";
  import KeyboardSettings from "./KeyboardSettings.svelte";
  import Playground from "./Playground.svelte";
  import Tests from "./Tests.svelte";
  import { fngrng, testModeEnabled } from "./persistentStore";

  const toggleTests = ({ detail }) => {
    // ⌥T ⇒ †
    if (detail === "†") $testModeEnabled = !$testModeEnabled;
    // ⌥G ⇒ ©
    if (detail === "©") $fngrng = !$fngrng;
  };
</script>

<Keydown on:key={toggleTests} />

<Notifications>
  {#if $testModeEnabled}
    <div>
      <Playground />
      <Tests />
    </div>
  {:else if $fngrng}
    <img src="mockv1.png" alt="Mock from Figma" />
  {:else}
    <PrefsOverlay />
    <TopNav />
    <LevelSelect />
    <Main />
    <KeyboardSettings />
  {/if}
</Notifications>

<svelte:head>
  {#if !$fngrng}
    <style>
      :root {
        --text-color: white;
        --background-color: black;
        --menu-background-color: hsl(0, 0%, 7%);
        --accent-color: hsl(280, 65%, 44%);
        --secondary-accent-color: orange;
        --tertiary-accent-color: green;
      }

      body {
        display: flex;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        height: 100vh;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }

      body * {
        font-family: "Lucida Console", Monaco, monospace;
      }
    </style>
  {:else}
    <style>
      body {
        margin: 0 0;
      }
    </style>
  {/if}
</svelte:head>

<style>
  div {
    display: grid;
  }

  img {
    width: 100%;
    max-height: 100vh;
  }
</style>
