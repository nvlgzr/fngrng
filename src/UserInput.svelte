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

  export let color = "black";

  $: startTrial = ({ target: { value } }) => {
    $gameState = "on";
    $userText = value;
  };

  $: if ($gameState !== "on") {
    $userText = "";
  }

  const maybeCountKeyPress = ({ keyCode }) => {
    if ($gameState === "ready") {
      $totalKeyPresses = 0;
    }
    if (!specialKeyCodes.includes(keyCode)) {
      $totalKeyPresses++;
    }
  };
</script>

<input
  on:input={startTrial}
  on:keydown={maybeCountKeyPress}
  value={$userText}
  style={`color:${color};`}
  id="userInput"
  type="text"
  spellcheck="false"
/>
