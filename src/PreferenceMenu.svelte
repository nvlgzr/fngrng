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

  function handleKeydown(event) {
    if (event.keyCode === 27) {
      closeMenu();
    }
  }

  function openMenu() {
    $prefsOpen = true;
  }

  function closeMenu() {
    $prefsOpen = false;
  }

  $: prefs = [
    {
      display: "Capital Letters Allowed",
      value: $uppercaseAllowed,
      handler: (e) => ($uppercaseAllowed = e.target.checked),
      class: "capitalLettersAllowed",
    },
    {
      display: "Punctuation Allowed",
      value: $punctuationToInclude, // ⚠️ Uses falsiness of empty string
      handler: (e) => {
        const punct = e.target.checked ? "'.-" : "";
        $punctuationToInclude = punct;
      },
      class: "punctuationModeButton",
    },
    {
      display: "Full Sentence Mode",
      value: $fullSentenceModeEnabled,
      handler: (e) => ($fullSentenceModeEnabled = e.target.checked),
      class: "fullSentenceMode",
    },
    {
      display: "Word Scrolling Mode",
      value: $wordScrollingModeEnabled,
      handler: (e) => ($wordScrollingModeEnabled = e.target.checked),
      class: "wordScrollingModeButton",
    },
  ];

  $: timeLimitModeButtonClicked = (e) => {
    $timeLimitModeEnabled = true;
  };

  $: wordLimitModeButtonClicked = (e) => {
    $timeLimitModeEnabled = false;
  };
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
      </li>
    {/each}
    <li>
      {#if $timeLimitModeEnabled}
        <input bind:value={$maxSeconds} type="number" autocomplete="off" />
      {/if}
      Time Limit Mode<input
        on:click={timeLimitModeButtonClicked}
        checked={$timeLimitModeEnabled}
        type="checkbox"
        autocomplete="off"
        disabled={$timeLimitModeEnabled}
      />
    </li>
    <li>
      {#if !$timeLimitModeEnabled}
        <input
          bind:value={$maxWords}
          type="number"
          step="10"
          autocomplete="off"
        />
      {/if}
      Word Limit Mode
      <input
        on:click={wordLimitModeButtonClicked}
        checked={!$timeLimitModeEnabled}
        type="checkbox"
        autocomplete="off"
        disabled={!$timeLimitModeEnabled}
      />
    </li>
  </ul>
</div>

<style>
  .preferenceButton {
    background-image: url("/settingsIcon.webp");
    background-size: cover;
    -webkit-filter: invert(1);
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
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
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
    -webkit-filter: invert(1);
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
    -webkit-transition: right 0.08s linear;
    -o-transition: right 0.08s linear;
    transition: right 0.08s linear;
  }

  .openPrefs {
    right: 0;
  }

  .preferenceMenu ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: end;
    -ms-flex-align: end;
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
