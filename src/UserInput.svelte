<script>
  import { gameState, promptLines, userText } from "./volatileStore.js";

  const handleInputChange = (input, promptArray) => {
    // NYI
    return input;
  };

  $: startTrial = (e) => {
    $gameState = "on";
    $userText = handleInputChange(e.target.value, $promptLines);
  };
</script>

<input
  on:input={startTrial}
  value={$userText}
  id="userInput"
  type="text"
  spellcheck="false"
/>
