<script>
  import { currentLevel } from "./persistentStore";
  import { lettersInLevel } from "./volatileStore";
</script>

<div>
  level {$currentLevel} <span class="text-white">{$lettersInLevel}</span>
  {#if $lettersInLevel === ""}
    <span class="text-red-400 text-2xl">⇐ select a level…</span>
  {/if}
</div>
