<template>
  <div id="home">
    <div class="row">
      <div class="col-sm">
        <h1 id="hometext">&nbsp;&nbsp;DREAM,</h1>
        <h1 id="hometext">&nbsp;DISCOVER,</h1>
        <h1 id="hometext">EXPERINCE!</h1>
        <br>
        <h2 id="text">Live more with wonders.</h2>
        <br>
        <br>
        <br>
        <h3 id="spotxt">Try SpotMe free for 30 days*</h3>
        <br>
        <br>
        <v-btn id="spot" large color="secondary" @click="submit">SpotMe Free</v-btn>
      </div>
      <div class="col-sm">
        <img id="image1" src="@/assets/image4.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image2" src="@/assets/image5.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image3" src="@/assets/image2.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image4" src="@/assets/image3.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image5" src="@/assets/image6.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image6" src="@/assets/image1.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image7" src="@/assets/image8.jpg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image8" src="@/assets/image7.jpg">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </div>
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
#hometext {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-weight: bold !important;
  font-size: 75px !important;
  margin-left: 140px !important;
}
#text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-weight: normal !important;
  font-size: 45px !important;
  margin-left: 110px !important;
  line-height: 18px;
}

#spotxt {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-weight: normal !important;
  font-size: 30px !important;
  margin-left: 150px !important;
  line-height: 0px;
  color: red;
}
#spot {
  position: absolute;
  width: 134px;
  height: 58px;
  background-color: gray;
  margin-left: 240px;
  border-radius: 30px;
  color: white;
}

#home {
  margin-top: 90px !important;
}
#image1 {
  width: 300px !important;
  margin-top: -2% !important;
  margin-left: 100px;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}
#image2 {
  width: 250px !important;
  margin-top: -315px !important;
  margin-left: 450px;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image3 {
  width: 200px !important;
  margin-top: -10% !important;
  margin-left: 395px;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image4 {
  width: 240px !important;
  margin-top: -15% !important;
  margin-left: 335px;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image5 {
  width: 250px !important;
  margin-top: 23% !important;
  margin-left: -47%;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image6 {
  width: 250px !important;
  margin-top: -80% !important;
  margin-left: 11%;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image7 {
  width: 150px !important;
  margin-top: -98% !important;
  margin-left: -52%;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}

#image8 {
  width: 253px !important;
  margin-top: -45% !important;
  margin-left: -17%;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}
</style>