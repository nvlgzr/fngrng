<script context="module">
  import { toast } from "@zerodevx/svelte-toast";
  import { SvelteToast } from "@zerodevx/svelte-toast";

  export const success = (m, opts) =>
    toast.push(m, {
      ...opts,
      theme: {
        "--toastBackground": "hsl(145, 50%, 96%)",
        "--toastColor": "hsl(161, 40%, 55%)",
        "--toastProgressBackground": "hsl(161, 40%, 55%)",
      },
    });

  export const warning = (m, opts) =>
    toast.push(m, {
      ...opts,
      theme: {
        // Based on tailwind orange
        "--toastBackground": "hsl(34, 100%, 96%)",
        "--toastColor": "hsl(27, 75%, 65%)",
        "--toastProgressBackground": "hsl(27, 75%, 65%)",
      },
    });

  export const failure = (m, opts) =>
    toast.push(m, {
      ...opts,
      theme: {
        "--toastBackground": "hsl(360, 50%, 96%)",
        "--toastColor": "hsl(360, 50%, 65%)",
        "--toastProgressBackground": "hsl(360, 50%, 65%)",
      },
    });
</script>

<div>
  <SvelteToast
    options={{
      // duration: 50000, // Uncomment to keep onscreen during dev
      intro: { y: 64 },
      theme: {
        "--toastBorderRadius": "0.45rem", // #hackalert. This matches magic number in Keyboard.svelte
        "--toastMsgPadding": "1.5rem",
        "--toastBoxShadow": "0px 4px 15px hsla(0, 0%, 0%, 0.25)", // #hackalert. Also in Info.svelte
      },
    }}
  />
</div>

<style lang="postcss">
  :root {
    --toastBorderRadius: 0.45rem;
    /* --toastContainerTop: 2rem; */

    --toastContainerTop: auto;
    --toastContainerRight: 2rem;
    --toastContainerBottom: 1.25rem;
    --toastContainerLeft: 2rem;

    --toastWidth: 28ch;
  }
  div {
    @apply font-sans text-2xl;
  }
</style>
