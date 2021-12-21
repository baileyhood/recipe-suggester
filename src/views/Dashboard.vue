<template>
  <main class="dashboard">
    <Navigation />
    <section class="section">
      <div class="section__inner row">
        <div class="column row row--vertical-center">
          <Headline level="1" size="1">Find recipes with ingredients you already&nbsp;have.</Headline>
          <p class="dashboard__hero-subheadline">Don’t go to the grocery store when you already have the ingredients you need to make a delicious dish.</p>
          <div class="dashboard__hero-button-container row row--no-wrap">
            <Button class="dashboard__hero-button" level="primary">Get Started</Button>
            <Button class="dashboard__hero-button" level="secondary">Explore Recipes</Button>
          </div>
        </div>
        <div class="column dashboard__hero-image-container">
          <img class="dashboard__hero-image" src="@/assets/images/image-grain-salad.jpg" alt="Grain salad dish on white table">
          <Card class="dashboard__hero-card" max-width="250">
            <p class="u-font-primary u-margin-bottom-10">Grain Salad</p>
            <p>Kale, grape tomatoes, millet</p>
          </Card>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Auth } from 'aws-amplify'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Headline from '@/components/Headline'
import Navigation from '@/components/Navigation'

export default {
  name: 'Dashboard',
  components: {
    Button,
    Card,
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
    &__hero-button {
      width: 47%;
    }

    &__hero-button-container {
      display: flex;
      max-width: 415px;
    }

    &__hero-image {
      min-width: 600px;
      width: 100%;
    }

    &__hero-subheadline {
      max-width: 400px;
    }

    &__hero-image-container {
      position: relative;
    }

    &__hero-card {
      position: absolute;
      bottom: -35px;
      left: 35px;
    }
  }
</style>
