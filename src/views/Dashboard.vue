<template>
  <main>
    <section class="header container">
      <div class="container">
        <p class="logo">Recipe<span>Suggestor</span></p>
        <p class="u-font-color-lightgrey">Use what you have. Get what you need.</p>
      </div>
      <div class="container">
        <Input type="text" placeholder="Search" />
      </div>
      <div class="container">
          <Link :to="{ name: 'Account' }">My Account</Link>
      </div>
    </section>
  </main>
</template>

<script>
import { Auth } from 'aws-amplify'
import Input from '@/components/Input'
import Link from '@/components/Link'
export default {
  name: 'Dashboard',
  components: {
    Input,
    Link
  },
  data () {
    return {
      userInfo: {}
    }
  },
  async mounted () {
    this.userInfo = await Auth.currentAuthenticatedUser()
  }
}
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
  }

  .logo {
    font-size: rem-calc(26);
    font-weight: $font-weight-bold;

    span {
      color: $color-primary-green;
    }
  }
</style>
