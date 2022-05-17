<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Toasts from "./Toasts.svelte";
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
  import { displayAllGameControls } from "./volatileStore";
  import MobileApology from "./MobileApology.svelte";
  import LogRocket from "logrocket";

  let modeIndex = 0;
  let modes = ["app", "playground", "tests"];
  const globalToggles = ({ detail }) => {
    // ⌥A ⇒ å (A for App Mode)
    if (detail === "å") {
      modeIndex = (modeIndex + 1) % modes.length;
      $escapeHatch = modes[modeIndex];
    } else if (detail === "Shift+Control+/") {
      $displayAllGameControls = !$displayAllGameControls;
    }
  };

  let model;

  // Unlike SvelteKit, Svelte doesn't have a prod/dev distinction built in.
  //
  // https://stackoverflow.com/a/69307936/16569780
  //
  // I like this solution because it relies on the environment, rather than
  // the bundler, to define the, well…the environment.
  const isProduction = (function () {
    // Check if is client side
    if (typeof window !== "undefined" && window.document !== undefined) {
      // check production hostname
      if (
        window?.location.hostname !== undefined &&
        window.location.hostname === "fngrng.navegazer.club"
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  })();

  if (isProduction) {
    LogRocket.init("zzmryh/fngrng");
  }
</script>

<span
  style:position="absolute"
  style:font-size="2rem"
  style:margin="0.5rem 0.25rem">{isProduction ? "" : "🤖"}</span
>

<Tailwindcss />
<Toasts />

<Keystroke on:stroke={globalToggles} on:combo={globalToggles} />

{#if $escapeHatch === "app"}
  <!-- Headless Components-->
  <GameEngine bind:model />
  <Shortcuts bind:model />

  <!-- Visible UX -->
  <div>
    <Nav {model} />
    <LayoutHeader />
    <Game {model} />
    <KeyboardWithControls />
    <p>[Pro tip: Toggle Primary Controls ⇧^?]</p>
  </div>

  <!-- Mobile Punt -->
  <MobileApology />
{:else if $escapeHatch === "tests"}
  <Tests />
{:else}
  <Playground />
{/if}

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
  @media (max-width: 768px) {
    div {
      @apply hidden;
    }
  }
  @media (min-width: 768px) {
    div {
      display: grid;
    }
  }
  p {
    @apply my-0 mx-auto p-4;
    @apply text-coolGray-700;
  }
</style>
