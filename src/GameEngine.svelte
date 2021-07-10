<script>
  import { getNotificationsContext } from "svelte-notifications";
  import Keydown from "svelte-keydown";
  import randomPassage from "./randomPassage.js";
  import {
    uppercaseAllowed,
    fullSentenceModeEnabled,
    wordScrollingModeEnabled,
    timeLimitModeEnabled,
    maxSeconds,
    maxWords,
    punctuationToInclude,
    prefsOpen,
    keyRemapping,
    layoutMap,
    currentLevel,
    currentLayout,
    useColumnarLayout,
    useCustomLayout,
    currentFixedLayout,
  } from "./persistentStore.js";
  import {
    gameState,
    secondsSinceStart,
    lettersInLevel,
    isEditingCustomKeyMap,
  } from "./volatileStore.js";
  import {
    addSymbol,
    backspace,
    gameover,
    initModel,
  } from "./modelTransformations.js";
  import { filterWordList, shuffle, remap } from "./pureFunctions";
  import { masterList } from "./tenThousandWords";

  const freshModel = () => {
    let allValidLetters = $lettersInLevel + $punctuationToInclude;
    if ($uppercaseAllowed) {
      allValidLetters += $lettersInLevel.toUpperCase();
    }
    const wordLimit = $timeLimitModeEnabled ? $maxSeconds * 4 : $maxWords;
    const targetString = $fullSentenceModeEnabled
      ? randomPassage()
      : shuffle(filterWordList(masterList, allValidLetters)).join(" ");

    return initModel(targetString, wordLimit, $wordScrollingModeEnabled);
  };

  export let model = freshModel();

  $: if ($isEditingCustomKeyMap) {
    model = freshModel();
  }

  $: {
    // Reset when any of these settings change
    $uppercaseAllowed;
    $punctuationToInclude;
    $wordScrollingModeEnabled;
    $fullSentenceModeEnabled;
    $timeLimitModeEnabled;
    $maxSeconds;
    $maxWords;
    $lettersInLevel;
    $currentLevel;
    $currentLayout;
    $keyRemapping;
    model = freshModel();
  }

  $: $gameState = model.gameState;

  $: if (
    $timeLimitModeEnabled &&
    model.gameState === "on" &&
    $secondsSinceStart >= $maxSeconds
  ) {
    model = gameover(model);
  }

  const handleKey = ({ detail }) => {
    if ($prefsOpen) return;

    if (detail.length === 1) {
      const letter = $keyRemapping ? remap(detail, $layoutMap) : detail;
      model = addSymbol(model, letter);
    }
  };

  const handleCombo = ({ detail }) => {
    // All keyboard shortcuts use Control-<key>
    const ctrlRegEx = /^Control-(.)$/.exec(detail);
    if (ctrlRegEx) {
      handleControlShortcut(ctrlRegEx[1]);
    } else {
      const shftCtrlRegEx = /^Shift-Control-(.)$/.exec(detail);
      if (shftCtrlRegEx) {
        handleShiftControlShortcut(shftCtrlRegEx[1]);
      }
    }
  };

  // Used to confirm keyboard shortcut results
  const { addNotification } = getNotificationsContext();

  const maybeNotify = (notification) => {
    if (!$prefsOpen) addNotification(notification);
  };

  const handleControlShortcut = (controlKey) => {
    switch (controlKey) {
      case "c":
        $uppercaseAllowed = !$uppercaseAllowed;
        maybeNotify({
          text: `Capitals ${$uppercaseAllowed ? "On" : "Off"}`,
          position: "top-center",
          removeAfter: 2500,
        });
        break;

      case "p":
        // ↓ ⚠️ Hack alert! This lazily duplicates toggle in
        //      PreferenceMenu, rather than properly refactoring.
        $punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "";
        maybeNotify({
          text: `Punctuation ${$punctuationToInclude === "" ? "Off" : "On"}`,
          position: "top-center",
          removeAfter: 2500,
        });
        break;

      case "f":
        $fullSentenceModeEnabled = !$fullSentenceModeEnabled;
        maybeNotify({
          text: `Full Sentences ${$fullSentenceModeEnabled ? "On" : "Off"}`,
          position: "top-center",
          removeAfter: 2500,
        });
        break;

      case "s":
        $wordScrollingModeEnabled = !$wordScrollingModeEnabled;
        maybeNotify({
          text: `Word Scrolling ${$wordScrollingModeEnabled ? "On" : "Off"}`,
          position: "top-center",
          removeAfter: 2500,
        });
        break;

      case "t":
        $timeLimitModeEnabled = true;
        $prefsOpen = true;
        // No notification needed because this flow opens the prefs
        break;

      case "w":
        $timeLimitModeEnabled = false;
        $prefsOpen = true;
        // No notification needed because this flow opens the prefs
        break;

      case "k":
        $keyRemapping = !$keyRemapping;
        // No notification needed because this toggle's always visible
        break;

      case "l":
        $useColumnarLayout = !$useColumnarLayout;
        // No notification needed because this toggle's always visible
        break;

      default:
        maybeSwitchLevel(controlKey);
        break;
    }
  };

  const handleShiftControlShortcut = (controlKey) => {
    switch (controlKey) {
      case "1":
        $currentFixedLayout = "colemak";
        break;

      //    ↓ Weird inconsistency from Keydown
      //      Not sure why the other digits
      //      don't also get shifted
      case "@":
        $useCustomLayout = false;
        $currentFixedLayout = "colemakdh";
        break;

      case "A":
        $useCustomLayout = false;
        $currentFixedLayout = "azerty";
        break;

      case "D":
        $useCustomLayout = false;
        $currentFixedLayout = "dvorak";
        break;

      case "L":
        $useCustomLayout = false;
        $currentFixedLayout = "lefthandeddvorak";
        break;

      case "Q":
        $useCustomLayout = false;
        $currentFixedLayout = "qwerty";
        break;

      case "T":
        $useCustomLayout = false;
        $currentFixedLayout = "tarmak";
        break;

      case "W":
        $useCustomLayout = false;
        $currentFixedLayout = "workman";
        break;

      case "C":
        $useCustomLayout = !$useCustomLayout;
        break;

      default:
        break;
    }
  };

  const maybeSwitchLevel = (controlKey) => {
    const isLevel = /^[1-7]$/.test(controlKey);
    if (isLevel) {
      $currentLevel = parseInt(controlKey);
    }
  };

  const maybeReset = () => {
    if (model.gameState === "over") model = freshModel();
  };
</script>

<!-- Mutually exclusive to Keydown in VisualKeyboard -->
{#if !$isEditingCustomKeyMap}
  <Keydown
    on:key={handleKey}
    on:combo={handleCombo}
    on:Enter={maybeReset}
    on:Backspace={() => (model = backspace(model))}
  />
{/if}
