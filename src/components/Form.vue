<template>
  <form class="c-form">
    <slot></slot>
  </form>
</template>

<script>

export default {
  name: 'AppForm'
}
</script>

<style lang="scss">
.c-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
