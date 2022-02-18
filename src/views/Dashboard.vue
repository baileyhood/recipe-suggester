<template>
  <main class="dashboard">
    <Navigation />
    <section class="section">
      <div class="section__inner row row--stacked@tablet">
        <div class="row row--stacked u-justify-center u-site-vertical-margin@mobile">
          <Headline
            class="u-margin-right-0"
            level="1"
            size="1"
          >
            Find recipes with ingredients you already&nbsp;have.
          </Headline>
          <div>
            <p class="dashboard__hero-subheadline">Don’t go to the grocery store when you already have the ingredients you need to make a delicious dish.</p>
            <div class="dashboard__hero-button-container">
              <Button class="dashboard__hero-button" level="primary">Get Started</Button>
              <Button class="dashboard__hero-button" level="secondary">Explore Recipes</Button>
            </div>
          </div>
        </div>
        <div class="container  dashboard__hero-image-container">
          <img class="dashboard__hero-image" src="@/assets/images/image-grain-salad.jpg" alt="Grain salad dish on white table">
          <Card class="dashboard__hero-card" max-width="250">
            <p class="u-font-primary u-margin-bottom-10">Grain Salad</p>
            <p>Kale, grape tomatoes, millet</p>
          </Card>
        </div>
      </div>
    </section>
    <section class="section section--lightgrey">
      <div class="section__inner">
        <Headline level="2" size="2" class="u-text-center">Recipes</Headline>
        <div class="row row--space-evenly u-text-center">
            <Card
              v-for="(recipe, index) in recipes"
              :key="index"
              class="dashboard__recipe-card row row--stacked"
            >
              <img :src="recipe.image" class="u-width-100 u-margin-right-0" :alt="recipe.name">
              <p class="u-font-primary u-margin-top-10 u-margin-bottom-10">{{ recipe.name }}</p>
              <p>{{ getIngredientList(recipe.ingredients.items) }}</p>
              <div class="row">
                <Button @click.native="saveRecipe(recipe)" level="primary" class="c-button--small">Save</Button>
                <Button level="secondary" class="c-button--small">View</Button>
              </div>
            </Card>
          </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Auth, API, graphqlOperation } from 'aws-amplify'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Headline from '@/components/Headline'
import Navigation from '@/components/Navigation'
import { getRecipe, listRecipes } from '@/graphql/queries'
import { createFavoriteRecipe } from '@/graphql/mutations'

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
      userInfo: {},
      recipes: {}
    }
  },
  methods: {
    getIngredientList (ingredientList) {
      const getPunctuation = (currentIndex) => {
        return ingredientList.length === currentIndex + 1 ? '.' : ','
      }
      const combinedListItems = ingredientList.reduce((previousValue, currentValue, currentIndex) => {
        return `${previousValue} ${currentValue.ingredient.name}${getPunctuation(currentIndex)}`
      }, '')
      return combinedListItems
    },

    async saveRecipe (recipe) {
      console.log(recipe.id)
      const isDuplicate = await API.graphql(graphqlOperation(getRecipe, {
        id: recipe.id
      }))
      console.log('dup', isDuplicate)
      API.graphql(graphqlOperation(createFavoriteRecipe, {
        input: {
          id: recipe.id,
          title: recipe.name,
          recipeID: recipe.id
        }
      }))
    }
  },
  async mounted () {
    this.userInfo = await Auth.currentAuthenticatedUser()
    const recipeData = await API.graphql(graphqlOperation(listRecipes))
    this.recipes = recipeData.data.listRecipes.items
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
      max-width: 500px;
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

    &__recipe-card {
      max-width: 300px;
    }
  }
</style>
