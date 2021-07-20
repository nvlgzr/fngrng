<script>
  import { getNotificationsContext } from "svelte-notifications";
  import Keystroke from "./Keystroke.svelte";
  import {
    uppercaseAllowed,
    fullSentenceModeEnabled,
    wordScrollingModeEnabled,
    timeLimitModeEnabled,
    punctuationToInclude,
    keyRemapping,
    currentLevel,
    currentLayout,
    useColumnarLayout,
    useCustomLayout,
    currentFixedLayout,
  } from "./persistentStore.js";
  import { isEditingWordLimit, isEditingTimeLimit } from "./volatileStore.js";

  const handleCombo = ({ detail }) => {
    // All keyboard shortcuts use Control-<key>
    const ctrlRegEx = /^Control\+(.)$/.exec(detail);
    if (ctrlRegEx) {
      handleControlShortcut(ctrlRegEx[1]);
    } else {
      const shftCtrlRegEx = /^Shift\+Control\+(.)$/.exec(detail);
      if (shftCtrlRegEx) {
        handleShiftControlShortcut(shftCtrlRegEx[1]);
      }
    }
  };

  const handleControlShortcut = (controlKey) => {
    switch (controlKey) {
      case "c":
        $uppercaseAllowed = !$uppercaseAllowed;
        post(`Capitals ${$uppercaseAllowed ? "On" : "Off"}`);
        break;

      case "p":
        if ($currentLayout !== "custom") {
          // ↓ ⚠️ Hack alert! This lazily duplicates toggle in
          //      PreferenceMenu, rather than properly refactoring.
          $punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "";
          post(`Punctuation ${$punctuationToInclude === "" ? "Off" : "On"}`);
        } else {
          post("Punctuation not available in Custom layout mode");
        }
        break;

      case "f":
        if ($currentLayout !== "custom") {
          $fullSentenceModeEnabled = !$fullSentenceModeEnabled;
          post(`Full Sentences ${$fullSentenceModeEnabled ? "On" : "Off"}`);
        } else {
          post("Full Sentences not available in Custom layout mode");
        }
        break;

      case "s":
        $wordScrollingModeEnabled = !$wordScrollingModeEnabled;
        post(`Word Scrolling ${$wordScrollingModeEnabled ? "On" : "Off"}`);
        break;

      case "t":
        $timeLimitModeEnabled = true;
        $isEditingTimeLimit = true;
        $isEditingWordLimit = false;
        post(`Time Limit Mode ${$timeLimitModeEnabled ? "On" : "Off"}`);
        break;

      case "w":
        $timeLimitModeEnabled = false;
        $isEditingWordLimit = true;
        $isEditingTimeLimit = false;
        post(`Word Limit Mode ${$timeLimitModeEnabled ? "Off" : "On"}`);
        break;

      case "k":
        $keyRemapping = !$keyRemapping;
        post(`Key Remapping ${$keyRemapping ? "On" : "Off"}`);
        break;

      case "l":
        $useColumnarLayout = !$useColumnarLayout;
        // No notification needed…the effect's highly visible
        break;

      default:
        maybeSwitchLevel(controlKey);
        break;
    }
  };

  const handleShiftControlShortcut = (controlKey) => {
    switch (controlKey) {
      case "1":
        $useCustomLayout = false;
        $currentFixedLayout = "colemakdh";
        break;

      //    ↓ Weird inconsistency from Keystroke
      //      Not sure why the other digits
      //      don't also get shifted
      case "@":
        $useCustomLayout = false;
        $currentFixedLayout = "colemak";
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
        if ($fullSentenceModeEnabled) {
          post("Turn off Full Sentence mode to enable Custom layout");
        } else {
          $useCustomLayout = !$useCustomLayout;
        }
        break;

      default:
        break;
    }
  };

  // Used to confirm keyboard shortcut results
  const { addNotification } = getNotificationsContext();

  const post = (text) => {
    addNotification({
      text: text,
      position: "top-center",
      removeAfter: 2500,
    });
  };

  const maybeSwitchLevel = (controlKey) => {
    const isLevel = /^[1-7]$/.test(controlKey);
    if (isLevel) {
      $currentLevel = parseInt(controlKey);
    }
  };
</script>

<Keystroke on:combo={handleCombo} />
