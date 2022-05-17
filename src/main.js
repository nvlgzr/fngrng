import App from "./App.svelte";
import LogRocket from "logrocket";

LogRocket.init("zzmryh/fngrng");

const app = new App({
  target: document.body,
  props: {},
});

export default app;
