<template>
  <div>
    <v-app-bar color="primary" dark>

      <v-toolbar-title>SpotMeLogo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="signin()">Sign up</v-btn>
      <v-btn text @click="login()">Login</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods: {
    signin(){
    this.$router.push("/register");
    },
    login(){
      this.$router.push("/login");
    }

  }
};
</script>