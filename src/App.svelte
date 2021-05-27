<script>
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import CustomInput from "./CustomInput.svelte";
  import Main from "./Main.svelte";
</script>

<TopNav />
<LevelSelect />
<CustomInput />
<Main />

<div id="mappingToggle">
  <h6>Keyboard Mapping: <span>off</span></h6>
  <label class="switch">
    <input type="checkbox" autocomplete="off" />
    <span class="slider" />
  </label>
</div>
