<script>
  import ClickToClose from "./ClickToClose.svelte";
  import CornerInfo from "./CornerInfo.svelte";
  import Keystroke from "./Keystroke.svelte";
  import MainInfo from "./MainInfo.svelte";

  let show = false;
  // show = true; // Uncomment to make dev easier

  const toggle = () => (show = !show);

  const onCombo = ({ detail }) => {
    if (detail === "Control+/") toggle();
  };
</script>

<Keystroke on:combo={onCombo} />

<button class="open" on:click={toggle} title="Click to reveal Info panel">⌃?</button
>

<section class:show>
  <div class="central">
    <MainInfo />
  </div>
  <button class="close" on:click={toggle} title="Click to hide Info panel">⌃?</button>
  <div class="colophon">
    <CornerInfo>
      colophon
      <span slot="content">
        <p>built with <a href="https://svelte.dev">svelte</a></p>
        <p>inspired by <a href="http://colemak.academy">colemak.academy</a></p>
        <p>
          fonts: <a href="https://fonts.google.com/specimen/Tauri">tauri</a> +
          <a href="https://fonts.google.com/specimen/Libre+Baskerville"
            >libre baskerville</a
          >
        </p>
      </span>
    </CornerInfo>
  </div>
  <div class="community">
    <CornerInfo>
      community
      <span slot="content">
        <p>
          fngrng <a href="https://github.com/nvlgzr/fngrng/issues/new/choose"
            >feedback</a
          >
        </p>
        <p>contribute <a href="https://github.com/nvlgzr/fngrng">code</a></p>
        <p>introductory <a href="NYI">blog post</a></p>
      </span>
    </CornerInfo>
  </div>
</section>

<ClickToClose bind:falseToClose={show} transparent={false} />

<style lang="postcss">
  .open,
  .close {
    cursor: pointer;
  }
  section {
    @apply text-coolGray-800 text-opacity-70 font-serif;

    line-height: 3vh;

    position: fixed;
    width: 90vw;
    height: 100vh;
    left: 101vw;
    top: 24px;
    z-index: 50;

    border: 1px solid hsla(0, 0%, 100%, 0.5);
    filter: drop-shadow(-4px 4px 8px hsla(0, 0%, 0%, 0.25));
    border-radius: 36px 0px 0px 0px;

    transition: left 0.25s linear;

    background: url(/paper.jpg), white;
    background-size: cover;
    box-shadow: 0px 4px 15px hsla(0, 0%, 0%, 0.25);
  }
  p {
    @apply mt-2;
    font-size: 1.75vh;
  }
  a:after {
    content: "º";
  }
  a:hover {
    text-decoration: underline;
  }
  .show {
    left: 10vw;
  }
  .close {
    @apply text-red-500 text-opacity-70;
    @apply absolute left-8 top-8;
    @apply font-sans text-4xl;
    filter: blur(0.4px);
  }
  .central {
    @apply mt-10;
  }
  .colophon {
    @apply absolute left-8 bottom-16;
  }
  .community {
    @apply absolute right-8 bottom-16;
  }
</style>
