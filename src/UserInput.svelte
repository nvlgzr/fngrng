<script>
  import { gameState, userText, baseModel } from "./volatileStore.js";

  export let failed = false;
  $: color = failed ? "red" : "black";

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

  $: if (
    $gameState === "ready" ||
    $gameState === "over" ||
    $baseModel.clearInput
  ) {
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
    $baseModel.clearInput = false;
  }

  $: placeholder = $gameState === "over" ? "Press enter to reset" : "";
</script>

<input
  on:input={startTrial}
  on:keydown={(e) => e.preventDefault()}
  value={$userText}
  style={`color:${color};`}
  {placeholder}
  spellcheck="false"
/>
