<script>
  import { deleteLatestWord, promptLines } from "./volatileStore.js";
</script>

<div class="fade">
  <h2 class="prompt {$deleteLatestWord ? '' : 'smoothScroll'}">
    {#each $promptLines as line, i}
      <span class="line">
        {#each line as word, j}
          <span id={`id${i + j}`} class="word">
            {#each word as char, k}
              {char}
            {/each}
          </span>&nbsp;
        {/each}
      </span>
    {/each}
  </h2>
</div>

<style>
  .fade {
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0)
    );
  }

  .prompt {
    position: relative;
    font-size: 2vmax;
    margin: 10vh 0 0 0;
    letter-spacing: 0.1vmax;
  }

  .smoothScroll {
    -webkit-transition: left 0.1s linear;
    -o-transition: left 0.1s linear;
    transition: left 0.1s linear;
  }

  .paragraph {
    color: grey;
    word-wrap: break-word;
    width: 103%;
    font-size: 2.4vmin;
    margin: 6.5vmin auto 0 auto;
  }

  .line {
    white-space: nowrap;
  }

  .paragraph .line {
    margin-left: 1.6vmin;
    display: block;
  }
</style>
