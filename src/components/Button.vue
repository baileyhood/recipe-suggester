<template>
  <component
    :is="type"
    :class="[
      'c-button',
      `c-button--${level}`
    ]"
    :to="getLink"
  >
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
    }
  },

  computed: {
    getLink () {
      return this.linkTo ? { name: this.linkTo } : null
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
  font-size: rem-calc(16);
  padding: rem-calc(15) rem-calc(10);
  text-decoration: none;
  width: 100%;
  border-radius: $site-border-radius;
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
</style>
