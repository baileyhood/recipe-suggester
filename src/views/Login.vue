<template>
  <div class="p-login">
    <Card class="p-login__card" max-width="550">
      <Headline level="1" size="1" :has-divider="true">Sign In</Headline>
      <p class="u-margin-bottom-30">Sign in below to access your dashboard</p>
      <Form @submitForm="login">
        <Input type="email" v-model="email" placeholder="Email address" />
        <Input type="password" v-model="password" placeholder="Password" />
        <Button type="submit" level="secondary">Login</Button>
      </Form>
    </Card>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Headline from '@/components/Headline.vue'
import Input from '@/components/Input.vue'

import Form from '@/components/Form'
export default {
  name: 'Login',

  components: {
    Button,
    Card,
    Form,
    Headline,
    Input
  },

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async login () {
      try {
        await Auth.signIn(this.email, this.password)
        alert('worked')
        // this.$router.push({ name: 'Dashboard' })
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style lang="scss">
.p-login {
  background-size: cover;
  background-image: url('../assets/images/image-plants-in-corner.jpg');
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;

  &__card {
    align-self: center;
  }
}
</style>
