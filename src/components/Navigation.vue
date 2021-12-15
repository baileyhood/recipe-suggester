<template>
  <header class="header container">
    <Logo/>
    <Link :to="{ name: 'Account' }">My Account</Link>
  </header>
</template>
<script>
import Link from '@/components/Link'
import Logo from '@/components/Logo'
export default {
  name: 'Navigation',
  components: {
    Link,
    Logo
  }
}
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid $color-secondary-lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
