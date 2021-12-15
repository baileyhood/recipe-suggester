<template>
  <header class="header container">
    <div class="header__inner container__inner row">
      <Logo/>
      <Link :to="{ name: 'Account' }">My Account</Link>
    </div>
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

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
