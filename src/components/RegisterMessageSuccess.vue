<template>
  <div class="c-success-message">
    <img class="c-success-message__icon" src="@/assets/icons/icon-checkmark-box.svg" alt="Green checkmark icon">
    <p class="c-success-message__headline">
      Successful!
    </p>
    <p>Your BookNotes account was successfully created. Let's login:</p>
  </div>
</template>

<script>

export default {
  name: 'RegisterMessageSuccess'
}
</script>

<style lang="scss">
.c-success-message {
  font-size: rem-calc(20);
  padding: rem-calc(30);

  &__headline {
    font-family: $font-primary;
    font-size: rem-calc(30);
    margin-bottom: rem-calc(10);
  }

  &__icon {
    max-width: 45px;
  }
}
</style>
