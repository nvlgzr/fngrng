<script>
  import { currentLevel, showFrames } from "./persistentStore";
  import { lettersInLevel } from "./volatileStore";
</script>

<div>
  level {$currentLevel} <span class="text-white">{$lettersInLevel}</span>
</div>

<style>
</style>
