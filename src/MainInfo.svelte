<img src="fingers.png" alt="line drawing of fingers on keyboard" />
<h1>fngrng</h1>

<h2>simple typing practice</h2>

<dl>
  <dt>8 popular layouts</dt>
  <dd>defaults to colemak-dh</dd>
  <dt>keyboard-first UX</dt>
  <dd>
    shortcut symbols:
    <span class="control">⌃ control</span>
    <span class="shift">⇧ shift</span>
  </dd>
  <dt>columnar keyboard option</dt>
  <dd>for “ortholinear” keyboards</dd>
  <dt>word- and time-limit modes</dt>
  <dd>and more!…</dd>
</dl>

<style lang="postcss">
  img,
  h1,
  h2,
  dl {
    @apply text-3xl mx-auto text-center;
  }

  h1,
  h2,
  dl {
    filter: blur(0.4px); /* Just to soften it into the paper texture a bit. */
  }

  h1 {
    @apply text-8xl -mt-10;
    font-style: italic;
  }

  h2 {
    @apply mt-4;
  }

  dl {
    @apply mt-16;
  }

  h2,
  dt {
    @apply text-5xl mt-6;
  }
  dt:before {
    content: "⚘ ";
    @apply text-3xl;
  }

  dd {
    @apply mt-2;
  }
  .control {
    @apply text-red-500;
    filter: blur(0.5px);
  }
  .shift {
    @apply text-blue-400;
    filter: blur(0.5px);
  }
</style>
