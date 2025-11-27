# Plan for upgrading `fngrng` from Svelte 4 to Svelte 5 with as few changes as possible.

## Existing Project

`fngrng` is a "simple typing practice" app built in Svelte 4. It features chrome-free buttons, thorough keyboard shortcut support, multiple keyboard layouts to practice (defaults to colemak-dh), with different "levels" of practice per layout (from usually-homerow-only to full-keyboard), several practice text options (scrolling, paragraph, a "Full Sentences" passage-typing mode, et al.), and a choice between working against either a time- or word- limit (both customizable). Pressing/clicking the `⌃?` in the top-right corner reveals a slide-on/out info panel.

## Criteria

1. No human intervention. Perform the entire upgrade, including verification steps, autonomously. Read the entire code base and take notes for yourself as needed, any time it seems like you've lost sight of how it all works together.
2. No altered interactions. Use visual snapshots to prove that behaviors that were idempotent prior to the upgrade remain so afterward. (Some behaviors are expected to be non-idempotent. E.g., the words to type—displayed above the initial "start typing to play" instruction—are chosen randomly on every launch, and the selected passage is chosen randomly on launch as well.) Preserve the snapshots in timestamped directories so that I can troubleshoot any place you get stuck, and so you have proof of your assertions. Where helpful, write automated function tests prior to making changes.
3. Nothing broken. Ok, this is really just a more specific version of #2, but needless to say, if the app won't even launch, there's no point claiming you've finished your work. Another way of putting this is: unless you're stuck in a rut and need help, keep working till the task is complete!

While I've given you access to svelte-mcp for reference, please also do your own research of existing reports detailing the Svelte community's challenges and solutions to updating Svelte 4 code to Svelte 5, esp. vis-a-vis `Stores` & `Runes`.

Run the app on port 5003 during your tests and when you're ready for me to see the finished project in action!