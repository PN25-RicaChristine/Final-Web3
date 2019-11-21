<template>
  <div>
    <v-app-bar id="head" dark>
      <v-toolbar-title>SpotMeLogo</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-row>
        <v-col md="10">
          <center>
              <v-text-field label="Search" hide-details :append-outer-icon="'mdi-magnify'" v-show="$route.path === '/dashboard' "></v-text-field>
          </center>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>

      <v-btn
        text
        @click="signin()"
        v-show="$route.path === '/register' || $route.path === '/login'  || $route.path === '/'? true : false"
      >Sign up</v-btn>
      <v-btn
        text
        @click="login()"
        v-show="$route.path === '/register' || $route.path === '/login'  || $route.path === '/'? true : false"
      >Login</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    signin() {
      this.$router.push("/register");
    },
    login() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#searchbar{
  width:90%;
  margin-top: 2%;
   margin-bottom: 2%;
  background-color: transparent;
}
#head {
  /* padding-top: 5px; */
  background-color: #cd853f;
}
</style>
