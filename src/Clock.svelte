<script>
  import { secondsSinceStart } from "./volatileStore.js";
  import { timeLimitModeEnabled, maxSeconds } from "./persistentStore.js";

  $: secondsAdjustedForDirection = $timeLimitModeEnabled
    ? Math.max($maxSeconds - $secondsSinceStart, 0)
    : $secondsSinceStart;

  $: minutes = Math.floor(secondsAdjustedForDirection / 60);
  $: seconds = secondsAdjustedForDirection % 60;
</script>

<div class="w-48 float-left">
  {minutes}m {seconds}s
</div>
