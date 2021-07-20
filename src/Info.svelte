<script>
  import CornerInfo from "./CornerInfo.svelte";
  import Keystroke from "./Keystroke.svelte";
  import MainInfo from "./MainInfo.svelte";

  let hide = true;
  // hide = false; // Uncomment to make dev easier

  const toggle = () => (hide = !hide);

  const onCombo = ({ detail }) => {
    if (detail === "Control+i") toggle();
  };
</script>

<Keystroke on:combo={onCombo} />

<span on:click={toggle} title="Click to reveal Info panel">⌃I</span>

<section class:hide>
  <div class="central">
    <MainInfo />
  </div>
  <div class="close" on:click={toggle} title="Click to hide Info panel">⌃I</div>
  <div class="colophon">
    <CornerInfo>
      colophon
      <span slot="content">
        <p>built with <a href="https://svelte.dev">svelte</a></p>
        <p>inspired by <a href="http://colemak.academy">colemak.academy</a></p>
        <p>fonts: tauri + cochin</p>
      </span>
    </CornerInfo>
  </div>
  <div class="community">
    <CornerInfo>
      community
      <span slot="content">
        <p>fngrng <a href="NYI">feedback</a></p>
        <p>and contributes on <a href="NYI">github</a></p>
        <p>introductory <a href="NYI">blog post</a></p>
      </span>
    </CornerInfo>
  </div>
</section>

<style lang="postcss">
  span,
  .close {
    cursor: pointer;
  }
  section {
    color: hsla(0, 0%, 20%, 0.7);
    @apply font-serif text-3xl;

    position: fixed;
    width: 90vw;
    height: 100vh;
    left: 10vw;
    top: 24px;
    z-index: 50;

    border: 1px solid rgba(255, 255, 255, 0.5);
    filter: drop-shadow(-4px 4px 8px rgba(0, 0, 0, 0.25));
    border-radius: 36px 0px 0px 0px;

    transition: left 0.25s linear;

    background: url(/paper.jpg), #ffffff;
    background-size: cover;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  }
  p {
    @apply mt-2;
  }
  a:after {
    content: "º";
  }
  a:hover {
    text-decoration: underline;
  }
  .hide {
    left: 100vw;
  }
  .close {
    @apply absolute left-8 top-8;
    @apply font-sans text-4xl;
    color: hsl(0deg 79% 63% / 70%);
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
