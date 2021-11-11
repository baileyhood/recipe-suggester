<template>
  <input
    :class="[
      'c-input',
      widthClass
    ]"
    :placeholder="placeholder"
    :type="type"
    :value="value"
    @input="handleInput"
  />
</template>

<script>

export default {
  name: 'AppInput',

  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    type: {
      type: String
    },
    width: {
      type: Number
    }
  },

  data () {
    return {
      text: this.value
    }
  },

  computed: {
    widthClass () {
      return `c-input--${this.width}-width`
    }
  },

  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }

}
</script>

<style lang="scss">
.c-input {
  border: 1px solid $color-primary-lightgrey;
  color: $color-primary-grey;
  font-family: $font-primary;
  font-size: rem-calc(16);
  margin-bottom: rem-calc(20);
  padding: rem-calc(15) rem-calc(10);
  width: 100%;

  &::placeholder {
    color: $color-primary-grey;
  }
  }

  .c-input--50-width {
  @include breakpoint('tablet-up') {
    width: calc(50% - 10px);
  }
}
</style>
