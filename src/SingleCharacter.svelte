<script>
  export let charSpec = { char: "", color: "" };

  $: style = charSpec.color ? `color:${charSpec.color}` : "";
</script>

<span {style}>{charSpec.char}</span>
