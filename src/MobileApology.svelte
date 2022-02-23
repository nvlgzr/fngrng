<section>
  <div class="background">
    <div>
      <span class="font-serif italic text-5xl"
        >fngrng<span class="text-base align-top">™</span></span
      > is useless without a hardware keyboard, so I haven't bothered making it mobile-friendly.
      Sorry 'bout that!
    </div>
    <div>Learn more <a href="https://github.com/nvlgzr/fngrng">here</a>.</div>
  </div>
</section>

<style lang="postcss">
  @media (min-width: 768px) {
    section {
      @apply hidden;
    }
  }
  @media (max-width: 768px) {
    section {
      /* https://dev.to/gmeben/animating-gradients-with-pure-css-3bi8 */
      animation: animateBg 290s infinite linear;
      background-size: 300% 100%;
      background-image: repeating-linear-gradient(
          45deg,
          hsla(232, 41%, 56%, 0.5) 0,
          hsla(232, 41%, 56%, 0.5) 1vw,
          hsla(231, 37%, 44%, 0.5) 1vw,
          hsla(231, 37%, 44%, 0.5) 2vw
        ),
        linear-gradient(
          to bottom,
          hsl(343, 80%, 94%),
          hsl(214, 84%, 94%),
          hsl(356, 100%, 94%)
        );
      @apply fixed top-0 left-0 z-50;
      @apply w-screen h-full;
      @apply text-3xl px-10;
    }

    div {
      @apply m-auto my-10;
      color: #fff;
      filter: drop-shadow(1px 2px 4px hsla(0, 0%, 0%, 0.3));
    }

    a {
      text-decoration: underline;
    }

    @keyframes animateBg {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 0;
      }
    }
  }
</style>
