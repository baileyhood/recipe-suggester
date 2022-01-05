<template>
  <header class="header section">
    <div class="header__inner section__inner row">
      <Logo class="col-6"/>
      <div class="col-auto">
        <Link :to="{ name: 'Account' }">My Account</Link>
      </div>
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
    margin-bottom: inherit;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
