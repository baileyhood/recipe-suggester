<template>
  <component
    :is="headerLevel"
    :class="[
      headerClass,
      {
      'c-headline-divider': hasDivider,
      }
    ]">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      required: true
    },

    hasDivider: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      required: true,
      default: '1'
    }
  },

  computed: {
    headerLevel () {
      return `h${this.level}`
    },

    headerClass () {
      return `c-headline-${this.size}`
    }
  }
}
</script>

<style lang="scss">
$headline-margin-space: rem-calc(30);

  .c-headline-1 {
    font-size: clamp(rem-calc(30), 5vw, rem-calc(50));
    margin-bottom: $headline-margin-space;
    font-weight: $font-weight-semibold;
    line-height: 1.2;
  }

  .c-headline-2 {
    font-size: rem-calc(40);
    margin-bottom: $headline-margin-space;
  }

  .c-headline-3 {
  font-size: rem-calc(30);
  margin-bottom: $headline-margin-space;
  }

  .c-headline-divider {
  position: relative;
  margin-bottom: rem-calc(20);
  padding-bottom: rem-calc(20);

  // Divider line
  &::after {
    background-color: $color-primary-lightgrey;
    bottom: 0;
    content: '';
    height: 1px;
    left: 0;
    margin: 0 auto;
    max-width: 125px;
    position: absolute;
    right: 0;
    width: 100%;
  }
}
</style>
