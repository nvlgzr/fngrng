<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Notifications from "svelte-notifications";
  import Keydown from "svelte-keydown";
  import GameEngine from "./GameEngine.svelte";
  import Nav from "./Nav.svelte";
  import LayoutHeader from "./LayoutHeader.svelte";
  import KeyboardWithControls from "./KeyboardWithControls.svelte";
  import ClickToClose from "./ClickToClose.svelte";
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import Main from "./Main.svelte";
  import KeyboardSettings from "./KeyboardSettings.svelte";
  import Playground from "./Playground.svelte";
  import Tests from "./Tests.svelte";
  import Game from "./Game.svelte";
  import {
    fngrng,
    testModeEnabled,
    showFrames,
    prefsOpen,
  } from "./persistentStore";

  const globalToggles = ({ detail }) => {
    // ⌥T ⇒ †
    if (detail === "†") $testModeEnabled = !$testModeEnabled;
    // ⌥G ⇒ ©
    if (detail === "©") $fngrng = !$fngrng;
    // ⌥F ⇒ ƒ
    if (detail === "ƒ") $showFrames = !$showFrames;
  };

  let model;
</script>

<Tailwindcss />

<Keydown on:key={globalToggles} />

<Notifications>
  {#if $testModeEnabled}
    <div>
      <Playground />
      <Tests />
    </div>
  {:else if $fngrng}
    <GameEngine bind:model />
    <Nav {model} />
    <LayoutHeader />
    <Game {model} />
    <KeyboardWithControls />
    {#if $showFrames}
      <img src="comp-deleteme.png" alt="Dev-only Alignment Reference" />
    {/if}
  {:else}
    <ClickToClose bind:falseToClose={$prefsOpen} />
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
      html {
        @apply font-sans text-sm font-normal;
        @apply bg-gray-200;
      }
    </style>
  {/if}
</svelte:head>

<style>
  div {
    display: grid;
  }

  img {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    max-height: 100vh;
    /* opacity: 0; */
  }
</style>
