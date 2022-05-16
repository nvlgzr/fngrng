<div>
  <strong><slot /></strong>
  <slot name="content" />
</div>

<style lang="postcss">
  div {
    @apply text-center;
    font-size: 2.5vh;
    line-height: 3vh;
  }
</style>
