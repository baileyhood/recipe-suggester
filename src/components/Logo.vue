<template>
  <p class="logo">
    Recipe
    <span>Suggestor</span>
  </p>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
  .logo {
    font-size: rem-calc(22);
    line-height: 1;
    margin-bottom: 0;
    span {
      display: block;
      color: $color-primary-green;
    }
  }
</style>
