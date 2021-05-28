<script>
  import {
    prefsOpen,
    lowercaseOnly,
    fullSentenceModeEnabled,
  } from "./persistentStore";

  $: openPrefs = $prefsOpen;

  function handleKeydown(event) {
    if (event.keyCode === 27) {
      closeMenu();
    }
  }

  function openMenu() {
    prefsOpen.set(true);
  }

  function closeMenu() {
    prefsOpen.set(false);
  }

  $: usePassage = $fullSentenceModeEnabled;

  function toggleUsePassage(e) {
    fullSentenceModeEnabled.set(usePassage);
  }

  $: prefs = [
    {
      display: "Capital Letters Allowed",
      value: !$lowercaseOnly,
      handler: (e) => lowercaseOnly.set(e.target.checked),
      class: "capitalLettersAllowed",
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
      </li>
    {/each}
    <li>
      Punctuation Allowed<input
        class="punctuationModeButton"
        type="checkbox"
        autocomplete="off"
      />
    </li>
    <li>
      Full Sentence Mode<input
        bind:checked={usePassage}
        on:change={toggleUsePassage}
        class="fullSentenceMode"
        type="checkbox"
        autocomplete="off"
      />
    </li>
    <li>
      Word Scrolling Mode
      <input
        class="wordScrollingModeButton"
        type="checkbox"
        autocomplete="off"
        checked
      />
    </li>
    <li>
      <input
        class="timeLimitModeInput noDisplay"
        type="number"
        value="60"
        autocomplete="off"
      />
      Time Limit Mode<input
        class="timeLimitModeButton"
        type="checkbox"
        autocomplete="off"
      />
    </li>
    <li>
      <input
        class="wordLimitModeInput"
        type="number"
        value="50"
        step="10"
        autocomplete="off"
      />
      Word Limit Mode
      <input
        class="wordLimitModeButton"
        type="checkbox"
        autocomplete="off"
        checked
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
