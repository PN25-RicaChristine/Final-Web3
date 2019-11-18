<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>SpotMeLogo</v-toolbar-title>
      <v-spacer></v-spacer>
      <template>
        <v-row>
          <v-col cols="12" sm="4">
            <v-overflow-btn id="category" class="my-2" color="red" :items="items" label="Category"></v-overflow-btn>
          </v-col>
          <v-col md="5">
            <v-text-field id="search" label="Search" :prepend-icon="'mdi-magnify'" single-line></v-text-field>
          </v-col>
        </v-row>
      </template>

      <v-spacer></v-spacer>

      <v-btn
        text
        @click="signin()"
        v-show="$route.path === '/register' || $route.path === '/login'? true : false"
      >Sign up</v-btn>
      <v-btn
        text
        @click="login()"
        v-show="$route.path === '/register' || $route.path === '/login'? true : false"
      >Login</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Hotels" },
        { title: "Beaches" },
        { title: "Mountains" },
        { title: "Water Falls" },
        { title: "Historical" },
        { title: "Museums" }
      ]
    };
  },
  methods: {
    signin() {
      this.$router.push("/register");
    },
    login() {
      this.$router.push("/login");
    },
  }
};
</script>

<style scoped>
#search{
  margin-top: 20px;
}
</style>
