<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Notifications from "svelte-notifications";
  import Keystroke from "./Keystroke.svelte";
  import GameEngine from "./GameEngine.svelte";
  import Nav from "./Nav.svelte";
  import LayoutHeader from "./LayoutHeader.svelte";
  import KeyboardWithControls from "./KeyboardWithControls.svelte";
  import Playground from "./Playground.svelte";
  import Tests from "./Tests.svelte";
  import Game from "./Game.svelte";
  import { testModeEnabled } from "./persistentStore";
  import { lettersInLevel } from "./volatileStore";

  const globalToggles = ({ detail }) => {
    // ⌥T ⇒ †
    if (detail === "†") $testModeEnabled = !$testModeEnabled;
  };

  let model;
</script>

<Tailwindcss />

<Keystroke on:stroke={globalToggles} />

<Notifications>
  {#if $testModeEnabled}
    <div>
      <Playground />
      <Tests />
    </div>
  {:else}
    <GameEngine bind:model />
    <Nav {model} />
    <LayoutHeader />
    {#if $lettersInLevel.length}
      <Game {model} />
    {/if}
    <KeyboardWithControls />
  {/if}
</Notifications>

<svelte:head>
  {#if !$testModeEnabled}
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
</style>
