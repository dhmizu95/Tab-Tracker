<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="emai" id="email" placeholder="email" v-model="email" />
    <br />
    <input type="password" name="password" id="password" placeholder="password" v-model="password" />
    <br />
    <button @click="register()" type="submit">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";

export default {
  data() {
    return {
      email: "abc@abc.com",
      password: "123456"
    };
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
</style>