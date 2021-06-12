<script>
  import { gameState, userText } from "./volatileStore.js";

  export let color = "black";

  $: startTrial = ({ target: { value } }) => {
    $gameState = "on";
    $userText = value;
  };
</script>

<input
  on:input={startTrial}
  value={$userText}
  style={`color:${color};`}
  id="userInput"
  type="text"
  spellcheck="false"
/>
