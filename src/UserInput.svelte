<script>
  import { gameState, userText, totalKeyPresses } from "./volatileStore.js";

  // All keycodes for keys we typically want to ignore
  // (Note: The original list includes 32|space)
  export const specialKeyCodes = [
    27, // esc
    9, // tab
    20, // capslock
    17, // ctrl
    18, // alt
    93, // ]
    36, // home
    37, // ←
    38, // ↑
    39, // →
    40, // ↓
    144, // numlock
    36, // $
    8, // backspace
    16, // shift
    30, // <can't find a reference for this! 🥴>
    13, // return/enter
    224, // meta (e.g., ⌘)
  ];

  $: color = "black"; // Will be overridden with red when wrong char typed

  $: maybeCountKeyPress = ({ keyCode }) => {
    switch ($gameState) {
      case "ready":
        $totalKeyPresses = 0;
        $gameState = "on";
        break;

      case "on":
        if (!specialKeyCodes.includes(keyCode)) {
          $totalKeyPresses++;
        }
        break;

      case "over":
        if (keyCode === 13) {
          // return/enter triggers reset
          $gameState = "ready";
        } else {
          // Let the user's input pass for this runloop, but
          // clobber it before they get a chance to see it.
          setTimeout(() => {
            // See ⚠️ #HackAlert below.
            $userText = " ";
            $userText = "";
          }, 0);
        }
        break;

      default:
        throw new Error(`Impossible gameState: ${$gameState}`);
    }
  };

  $: startTrial = (e) => {
    const target = e.target;
    const value = target.value;
    switch ($gameState) {
      case "ready":
        break;

      case "on":
        $userText = value;
        break;

      case "over":
        break;

      default:
        throw new Error(`Impossible gameState: ${$gameState}`);
    }
  };

  $: if ($gameState !== "on") {
    // ⚠️ #HackAlert
    // Since we're in a reactive block, Svelte gets "smart" and
    // ignores changes that _appear_ to be no-ops. What it's not
    // recognizing is that the user might have typed some text
    // into the input since $userText was last cleared. Sigh.
    // So we dirty $userText in order to ensure the empty string
    // gets set _every_ time. Pretty sure this is simply another
    // variant of the issue described here:
    // https://svelte.dev/tutorial/updating-arrays-and-objects
    $userText = " ";
    $userText = "";
  }

  $: placeholder = $gameState === "over" ? "Press enter to reset" : "";
</script>

<input
  on:input={startTrial}
  on:keydown={maybeCountKeyPress}
  value={$userText}
  style={`color:${color};`}
  {placeholder}
  spellcheck="false"
/>
