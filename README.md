# fngrng

> a typing trainer focussed on accuracy over speed

## Play for Free

https://fngrng.navelgazer.club

## Run Locally

(Geeks only)

1. Fetch the code

   ```
   npx degit nvlgzr/fngrng target_dir
   ```

2. Install dependencies

   ```
   cd target_dir
   npm install
   ```

3. Run the app

   ```
   npm run dev
   ```

## 🗿🐰 + 🥚❓

There's a keyboard shortcut that rotates the app through three modes: _app_, _playground_, and _tests_. These latter two are dev environments, though I'm being lazy and leaving them accessible to the general public. ¯\\\_(ツ)\_/¯

_Playground_ mode just replaces the app with whatever's in Playground.svelte. Think of it as a sort of app-specific REPL, allowing integrated experimentation with subsets of the app's components in an environment where you don't have to worry aobut accidentally checking in breaking changes.

_Tests_ mode runs through all the tests in Tests.svelte. Don't go looking for Jest or Mocha, though. I wrote this system from the ground up. Does it integrate well with a CLI? Not at all. But it's fun to use, and it got me up and running without having to configure additional build tools, so I'm still glad I made it. It's amazing how far you can get with nothing but a single boolean comparison and some descriptive strings! <a title="Alt+A">VIEW_THIS_STRING_IN_README_SOURCE_IF_YOU_MUST_KNOW_THE_SECRET</a>
