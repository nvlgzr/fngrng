<script>
  import { alphabet } from "./levelMappings";

  import {
    currentLayout,
    currentLevel,
    fullSentenceModeEnabled,
    letterSetsForCurrentLayout,
    levelMaps,
  } from "./persistentStore";
  import { leftMinusRight } from "./pureFunctions";
  import { lettersInLevel } from "./volatileStore";

  $: levelLetters = leftMinusRight(alphabet, $lettersInLevel).length
    ? $letterSetsForCurrentLayout[$currentLevel - 1]
    : "all letters";
</script>

<div>
  {#if $fullSentenceModeEnabled}
    Full Sentences
  {:else}
    level {$currentLevel}
    <span class="text-white">{levelLetters}</span>
    <!-- There are corner cases where the toggles below -->
    <!-- don't quite make perfect sense, but under "normal"-->
    <!-- conditions I think this should work perfectly -->
    <!-- (at least for now). -->
    {#if $currentLayout === "custom" && levelLetters === ""}
      {#if $currentLevel === 1}
        <span class="text-red-400 text-2xl">⇐ select a level to edit…</span>
      {:else}
        <span class="text-red-400 text-2xl">empty level</span>
      {/if}
    {/if}
  {/if}
</div>
