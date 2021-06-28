<script>
  import {
    prefsOpen,
    uppercaseAllowed,
    fullSentenceModeEnabled,
    wordScrollingModeEnabled,
    timeLimitModeEnabled,
    maxSeconds,
    maxWords,
    punctuationToInclude,
  } from "./persistentStore";

  $: openPrefs = $prefsOpen;

  $: {
    // • Disallow fractional thresholds
    // • Clamp values
    // • Prevent NaN
    const TEN_MINUTES_MAX = 600;
    const THOUSAND_WORD_MAX = 1000;

    $maxSeconds = Math.min(
      Math.max(parseInt($maxSeconds || 0, 10), 0),
      TEN_MINUTES_MAX
    );

    $maxWords = Math.min(
      Math.max(parseInt($maxWords || 0, 10), 0),
      THOUSAND_WORD_MAX
    );
  }

  function handleKeydown({ key }) {
    if (key === "Escape" || key === "Enter") {
      closeMenu();
    }
  }

  function openMenu() {
    $prefsOpen = true;
  }

  let inputToBlur;
  function closeMenu() {
    $prefsOpen = false;
    inputToBlur.blur();
  }

  $: prefs = [
    {
      display: "Capital Letters Allowed",
      value: $uppercaseAllowed,
      handler: (e) => ($uppercaseAllowed = e.target.checked),
      class: "capitalLettersAllowed",
      shortcut: "⌃C",
    },
    {
      display: "Punctuation Allowed",
      value: $punctuationToInclude, // ⚠️ Uses falsiness of empty string
      handler: (e) => {
        const punct = e.target.checked ? "'.-" : "";
        $punctuationToInclude = punct;
      },
      class: "punctuationModeButton",
      shortcut: "⌃P",
    },
    {
      display: "Full Sentence Mode",
      value: $fullSentenceModeEnabled,
      handler: (e) => ($fullSentenceModeEnabled = e.target.checked),
      class: "fullSentenceMode",
      shortcut: "⌃F",
    },
    {
      display: "Word Scrolling Mode",
      value: $wordScrollingModeEnabled,
      handler: (e) => ($wordScrollingModeEnabled = e.target.checked),
      class: "wordScrollingModeButton",
      shortcut: "⌃S",
    },
  ];
</script>

<svelte:window on:keydown={handleKeydown} />

<button on:click={openMenu} class="preferenceButton" />

<div class:openPrefs class="preferenceMenu">
  <button on:click={closeMenu} class="closePreferenceButton" />
  <ul class="preferences">
    {#each prefs as pref}
      <li>
        {pref.display}<input
          bind:checked={pref.value}
          on:change={pref.handler}
          class={pref.class}
          type="checkbox"
          autocomplete="off"
        />
        <span style="color:gray;">{pref.shortcut}</span>
      </li>
    {/each}
    <li>
      {#if $timeLimitModeEnabled}
        <input
          bind:this={inputToBlur}
          bind:value={$maxSeconds}
          type="number"
          autocomplete="off"
        />
      {/if}
      Time Limit Mode<input
        type="radio"
        bind:group={$timeLimitModeEnabled}
        value={true}
        autocomplete="off"
      />
      <span style="color:gray;">⌃T</span>
    </li>
    <li>
      {#if !$timeLimitModeEnabled}
        <input
          bind:this={inputToBlur}
          bind:value={$maxWords}
          type="number"
          step="10"
          autocomplete="off"
        />
      {/if}
      Word Limit Mode
      <input
        type="radio"
        bind:group={$timeLimitModeEnabled}
        value={false}
        autocomplete="off"
      />
      <span style="color:gray;">⌃W</span>
    </li>
  </ul>
  <div class="esc">Esc / Enter to close</div>
</div>

<style>
  input {
    width: 2vh;
    height: 2vh;
    margin-left: 2vh;
  }

  li input,
  .esc {
    font-size: 1.7vh;
    width: 5vh;
    height: 1.7vh;
    margin: 0 auto;
  }

  .esc {
    width: 100%;
    color: gray;
    text-align: center;
    margin-top: 2rem;
  }

  .preferenceButton {
    background-image: url("/settingsIcon.webp");
    background-size: cover;
    filter: invert(1);
    background-repeat: no-repeat;
    border: none;
    opacity: 0.8;
    margin: 0;
    position: absolute;
    top: 2vmax;
    right: 2vmax;
    width: 3vmax;
    height: 3vmax;
  }

  .preferenceButton:hover,
  .closePreferenceButton:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  .closePreferenceButton {
    margin: 0;
    position: relative;
    top: 1vh;
    left: 1vh;
    background-image: url("/x.webp");
    background-size: cover;
    background-repeat: no-repeat;
    height: 2vh;
    width: 2vh;
    filter: invert(1);
    border: none;
  }

  .preferenceMenu {
    position: absolute;
    right: -37vh;
    z-index: 105;
    background: #111;
    height: 100vh;
    width: 33vh;
    border-left: 0.1vh solid var(--text-color);
    transition: right 0.08s linear;
  }

  .openPrefs {
    right: 0;
  }

  .preferenceMenu ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding: 0 1vh 0 0;
    height: 55vh;
  }

  .preferenceMenu ul li {
    color: var(--accent-color);
    font-size: 1.5vh;
    list-style: none;
  }
</style>
