<template>
  <div
    class="c-card"
    :style="`max-width: ${maxWidth}px`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.c-card {
  box-shadow: 0px 0px 52px rgba($color-black, 0.1);
  background-color: $color-white;
  border-radius: $site-border-radius;
  padding: rem-calc(30);
}
</style>
