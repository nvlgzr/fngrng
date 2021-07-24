<section>
  <div>
    <span class="font-serif italic text-4xl"
      >fngrng<span class="text-base align-top">™</span></span
    > is useless without a hardware keyboard, so I haven't bothered making it mobile-friendly.
    Sorry 'bout that!
  </div>
  <div>Learn more <a href="NYI">here</a>.</div>
</section>

<style lang="postcss">
  @media (min-width: 768px) {
    section {
      @apply hidden;
    }
  }
  @media (max-width: 768px) {
    section {
      @apply fixed top-0 left-0 z-50;
      @apply bg-gradient-to-b from-rose-800 to-blue-400 text-rose-50 w-screen h-full;
      @apply text-2xl px-10;
    }
    div {
      @apply m-auto my-10;
    }
    a {
      text-decoration: underline;
    }
  }
</style>
