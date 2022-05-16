<figure>
  <img
    style:height="15vh"
    src="fngrng-logo.svg"
    alt="line drawing of fingers on keyboard"
  />
</figure>

<h1>simple typing practice</h1>

<dl>
  <dt>8 popular layouts</dt>
  <dd>defaults to colemak-dh</dd>
  <dt>keyboard-first UX</dt>
  <dd>
    shortcut symbols:
    <span class="text-blue-400">⌃ control</span>
    <span class="text-red-500">⇧ shift</span>
  </dd>
  <dt>columnar keyboard option</dt>
  <dd>for “ortholinear” keyboards</dd>
  <dt>word- and time-limit modes</dt>
  <dd>and more!…</dd>
</dl>

<style lang="postcss">
  img,
  h1,
  dl {
    @apply mx-auto text-center;
    font-size: 2.25vh;
  }

  h1,
  span,
  dl {
    filter: blur(0.4px); /* Just to soften it into the paper texture a bit. */
  }

  dl {
    margin-top: 6.5vh;
  }

  h1,
  dt {
    margin-top: 2vh;
    font-size: 3vh;
  }
  dt:before,
  dt:after {
    /* Match hand color in logo SVG */
    color: hsl(0, 5%, 64%);
    content: " ⚘ ";
    font-size: 4vh;
  }

  dd {
    margin-top: 1vh;
  }
</style>
