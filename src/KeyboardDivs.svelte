<script>
  import { configuredRows } from "./volatileStore.js";

  $: rows = $configuredRows;
</script>

<div>
  {#each rows as row}
    <div class="row">
      {#each row as letterConf}
        <div
          class={`key ${letterConf.class} ${letterConf.id}`}
          id={letterConf.id}
        >
          <span class="letter">{letterConf.letter}</span>
        </div>
      {/each}
    </div>
  {/each}
</div>
