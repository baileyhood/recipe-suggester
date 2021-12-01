<template>
  <main>
    <section class="header container">
      <div class="container logo-container">
        <p class="logo">Recipe<span>Suggestor</span></p>
        <p class="u-font-color-lightgrey">Use what you have. Get what you need.</p>
      </div>
      <div class="container">
        <p>Hello, name</p>
        <Headline level="1" size="2">Find Recipes</Headline>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from '@/components/Headline'
export default {
  components: {
    Headline
  }
}
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
  }

  .logo {
    color: $color-white;
    font-size: rem-calc(26);
    font-weight: $font-weight-bold;

    span {
      color: $color-primary-green;
    }
  }

  .logo-container {
    background-color: $color-primary-grey;
    color: $color-white;
  }
</style>
