<template>
  <component
    :is="type"
    :class="[
      'c-button',
      `c-button--${level}`
    ]"
    :to="getLink"
  >
    <img v-if="icon" class="c-button__icon" :src="require(`@/assets/icons/${getIcon}.svg`)" alt="">
    <slot></slot>
  </component>
</template>

<script>

export default {
  name: 'AppButton',

  props: {
    linkTo: {
      type: String
    },

    level: {
      type: String,
      required: true,
      default: 'primary',
      validator: (value) => [
        'primary',
        'secondary',
        'tertiary'
      ].includes(value.toLowerCase())
    },

    icon: {
      type: String
    }
  },

  computed: {
    getLink () {
      return this.linkTo ? { name: this.linkTo } : null
    },
    getIcon () {
      return 'icon-white-checkmark'
    },
    type () {
      return this.linkTo ? 'router-link' : 'button'
    }
  }
}
</script>

style.<style lang="scss">
.c-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;
  font-family: $font-secondary;
  font-size: rem-calc(14);
  padding: rem-calc(12) rem-calc(10);
  text-decoration: none;
  width: 100%;
  border-radius: $site-border-radius;

  @include breakpoint(tablet-up) {
    font-size: rem-calc(16);
    padding: rem-calc(15) rem-calc(10);
  }

  &__icon {
    max-width: 15px;
    position: relative;
    top: 2px;
  }
}

  .c-button--primary {
    background-color: $color-primary-green;
    color: $color-white;
  }

  .c-button--secondary {
    background-color: $color-white;
    border: 1px solid $color-primary-green;
    color: $color-primary-green;
  }

  .c-button--small {
    padding: rem-calc(10);
  }
</style>
