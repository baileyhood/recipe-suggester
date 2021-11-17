<template>
  <div class="p-register">
    <Card class="p-register__card" max-width="550">
      <div v-if="!formWasSubmitted"  class="p-register__form-container">
        <Headline level="1" size="1" :has-divider="true">Sign Up</Headline>
        <p class="p-register__text">Sign up for an account to get started with BookNotes</p>
        <Form @submitForm="register">
          <Input
            placeholder="First name"
            type="text"
            v-model="firstName"
            :width="50"
          />
          <Input
            placeholder="Last name"
            type="text"
            v-model="lastName"
            :width="50"
          />
          <Input
            placeholder="Email address"
            type="email"
            v-model="email"
          />
          <Input
            placeholder="Password"
            type="password"
            v-model="password"
          />
          <Button level="secondary" type="submit">Register</Button>
          <p class="p-register__sign-in-text">Already registered? <Link :to="{name: 'Login'}">Sign In</Link></p>
        </Form>
      </div>
      <div v-else >
        <RegisterMessageSuccess/>
        <Button linkTo="Login" level="secondary">Login</Button>
      </div>
      <RegisterMessageError v-if="hasError" class="u-margin-top-15"  :message="errorMessage" />
    </Card>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Headline from '@/components/Headline.vue'
import Form from '@/components/Form.vue'
import Input from '@/components/Input.vue'
import Link from '@/components/Link.vue'
import RegisterMessageSuccess from '@/components/RegisterMessageSuccess.vue'
import RegisterMessageError from '@/components/RegisterMessageError.vue'

export default {
  name: 'Register',
  components: {
    Button,
    Card,
    Headline,
    Form,
    Input,
    Link,
    RegisterMessageSuccess,
    RegisterMessageError
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      formWasSubmitted: false,
      hasError: false,
      errorMessage: '',
      password: ''
    }
  },
  methods: {
    async register () {
      console.log('register')
      try {
        await Auth.signUp({
          username: this.email,
          password: this.password,
          attributes: {
            'custom:firstName': this.firstName,
            'custom:lastName': this.lastName,
            email: this.email
          }
        })
        this.hasError = false
        this.formWasSubmitted = true
      } catch (error) {
        this.hasError = true
        this.errorMessage = error.message
      }
    }
  }
}
</script>

  <style lang="scss">
  .p-register {
    background-size: cover;
    background-image: url('../assets/images/image-herb-sprig.jpg');
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;

  &__card {
    background-color: #fff;
    align-self: center;
  }

  &__label {
    font-size: rem-calc(14);
    font-style: italic;
    margin-bottom: rem-calc(40);
  }

  &__sign-in-text {
    margin-top: rem-calc(30);
    width: 100%;
  }

  &__text {
    margin-bottom: rem-calc(30);
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
