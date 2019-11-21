<template>
  <v-container fluid>
    <div class="row">
      <div class=" col-md-6 col-sm6 col-xs-12">
        <h1 class="text-lg-center" id="hometext">DREAM,</h1>
        <h1 class="text-lg-center" id="hometext">DISCOVER,</h1>
        <h1 class="text-lg-center" id="hometext">EXPERIENCE!</h1>
        <h2 class="text-lg-center" id="text">Live more with wonders.</h2>
        <h3 class="text-lg-center" id="spotxt">Try SpotMe free for 30 days*</h3>
      <v-btn id="spot" large color="secondary" @click="submit">SpotMe Free</v-btn>
    </div>
  </div>

          
  </v-container>
</template>

<script>
export default {
  methods: {
    submit: function(e) {
      e.preventDefault();
      this.$router.push("/register");
    }
  }
};
</script>

<style scoped>
#hometext{
  position: relative;
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-size: 4.5em;
  font-weight:black ;
 }

 #text{
   position: relative;
   font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
   font-weight: normal;
   font-size: 2.5em;
 }

 #spotxt{
   position: fixed;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-weight: normal;
  font-size: 1.5em !important;
  color: red;
  margin-left: 15%;
}

#spot {
  position: absolute;
  width: 134px;
  height: 58px;
  background-color: gray;
  margin-left: 20%;
  border-radius: 30px;
  color: white;
  margin-top: 3%;
}
 






</style>