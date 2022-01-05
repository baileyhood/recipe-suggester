<template>
  <main class="dashboard">
    <Navigation />
    <section class="section">
      <div class="section__inner row">
        <div class="col-xs-12 col-md-7 col-lg-6  u-site-vertical-margin@mobile">
          <div class="row">
            <Headline level="1" size="1">Find recipes with ingredients you already&nbsp;have.</Headline>
            <p class="dashboard__hero-subheadline">Don’t go to the grocery store when you already have the ingredients you need to make a delicious dish.</p>
            <div class="dashboard__hero-button-container">
              <Button class="dashboard__hero-button" level="primary">Get Started</Button>
              <Button class="dashboard__hero-button" level="secondary">Explore Recipes</Button>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-5 col-lg-6  container  dashboard__hero-image-container  u-no-gutters">
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
      margin-right: rem-calc(15);
      max-width: none;

      &:last-child {
        margin-right: 0;
      }
      @include breakpoint(tablet-up) {
        width: 100%;
        max-width: 200px;
      }
    }

    &__hero-button-container {
      display: flex;
      align-items: flex-start;
    }

    &__hero-image {
      width: 100%;

      @include breakpoint(tablet-up) {
        min-width: 600px;
      }
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
      display: none;

      @include breakpoint(tablet-up) {
        display: block;
      }
    }
  }
</style>
