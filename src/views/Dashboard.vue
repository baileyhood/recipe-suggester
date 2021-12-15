<template>
  <main>
    <Navigation />
    <section class="container">
      <div class="container__inner row">
        <div class="column">
          <Headline level="1" size="1">Find recipes with ingredients you already have.</Headline>
        </div>
        <div class="column">
          <img class="dashboard__hero-image" src="@/assets/images/image-grain-salad.jpg" alt="">
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Auth } from 'aws-amplify'
import Headline from '@/components/Headline'
import Navigation from '@/components/Navigation'

export default {
  name: 'Dashboard',
  components: {
    Headline,
    Navigation
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
<style lang="scss">
  .dashboard {
    &__hero-image {
      min-width: 600px;
      width: 100%;
    }
  }
</style>
