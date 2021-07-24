<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Notifications from "svelte-notifications";
  import Keystroke from "./Keystroke.svelte";
  import GameEngine from "./GameEngine.svelte";
  import Shortcuts from "./Shortcuts.svelte";
  import Nav from "./Nav.svelte";
  import LayoutHeader from "./LayoutHeader.svelte";
  import KeyboardWithControls from "./KeyboardWithControls.svelte";
  import Playground from "./Playground.svelte";
  import Tests from "./Tests.svelte";
  import Game from "./Game.svelte";
  import { escapeHatch } from "./persistentStore";
  import { lettersInLevel } from "./volatileStore";

  let modeIndex = 0;
  let modes = ["app", "playground", "tests"];
  const globalToggles = ({ detail }) => {
    // ⌥A ⇒ å (A for App Mode)
    if (detail === "å") {
      modeIndex = (modeIndex + 1) % modes.length;
      $escapeHatch = modes[modeIndex];
    }
  };

  let model;
</script>

<Tailwindcss />

<Keystroke on:stroke={globalToggles} />

<Notifications>
  {#if $escapeHatch === "app"}
    <!-- Headless Components-->
    <GameEngine bind:model />
    <Shortcuts bind:model />

    <!-- Visible UX -->
    <Nav {model} />
    <LayoutHeader />
    {#if $lettersInLevel.length}
      <Game {model} />
    {/if}

    <KeyboardWithControls />
  {:else if $escapeHatch === "tests"}
    <div>
      <Tests />
    </div>
  {:else}
    <Playground />
  {/if}
</Notifications>

<svelte:head>
  {#if $escapeHatch === "app"}
    <style>
      html {
        @apply font-sans text-sm font-normal;
        @apply bg-coolGray-200;
      }
    </style>
  {/if}
</svelte:head>

<style>
  div {
    display: grid;
  }
</style>
