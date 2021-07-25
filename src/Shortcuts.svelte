<script context="module">
  import { success, warning, failure } from "./Toasts.svelte";
</script>

<script>
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
        if (!$fullSentenceModeEnabled) {
          $uppercaseAllowed = !$uppercaseAllowed;
          if ($uppercaseAllowed) success("Capitals On");
          else failure("Capitals Off");
        } else {
          warning(
            'Turn off Full Sentences (<pre style="display:inline;">⌃F</pre>) to toggle Capital Letters'
          );
        }
        break;

      case "p":
        if ($fullSentenceModeEnabled || $currentLayout === "custom") {
          warning(
            $fullSentenceModeEnabled
              ? 'Turn off Full Sentences (<pre style="display:inline;">⌃F</pre>) to toggle Punctuation'
              : `Add punctuation to your Custom layout to practice words like "yrs.", "shan't", and "good-looking".<br /><br />Currently supported punctuation: period (.) apostrophe (') and hypen (-)`,
            { duration: $fullSentenceModeEnabled ? 5000 : 10000 }
          );
        } else {
          // ↓ ⚠️ Hack alert! This lazily duplicates toggle in
          //      PreferenceMenu, rather than properly refactoring.
          $punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "";
          if ($punctuationToInclude === "") failure("Punctuation Off");
          else success("Punctuation On");
        }
        break;

      case "f":
        if ($currentLayout !== "custom") {
          $fullSentenceModeEnabled = !$fullSentenceModeEnabled;
          if ($fullSentenceModeEnabled) success("Full Sentences On");
          else failure("Full Sentences Off");
        } else {
          warning(
            'Turn off Custom layout (<pre style="display:inline;">⇧⌃C</pre>) to enable Full Sentences'
          );
        }
        break;

      case "s":
        $wordScrollingModeEnabled = !$wordScrollingModeEnabled;
        if ($wordScrollingModeEnabled) success("Word Scrolling On");
        else failure("Word Scrolling Off");
        break;

      case "t":
        $timeLimitModeEnabled = true;
        $isEditingTimeLimit = true;
        $isEditingWordLimit = false;
        if ($timeLimitModeEnabled) success("Time Limit Mode On");
        else failure("Time Limit Mode Off");
        break;

      case "w":
        $timeLimitModeEnabled = false;
        $isEditingWordLimit = true;
        $isEditingTimeLimit = false;
        if (!$timeLimitModeEnabled) success("Word Limit Mode On");
        else failure("Word Limit Mode Off");
        break;

      case "i":
        $keyRemapping = !$keyRemapping;
        if ($keyRemapping) success("Imitate Layout On");
        else failure("Imitate Layout Off");
        break;

      case "k":
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
          warning(
            'Turn off Full Sentence mode (<pre style="display:inline;">⌃F</pre>) to enable Custom layout'
          );
        } else {
          $useCustomLayout = !$useCustomLayout;
        }
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
</script>

<Keystroke on:combo={handleCombo} />
