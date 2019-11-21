<template>
<v-container fluid>
    <div class="row">
        <div class="col-md-6 col-sm6 col-xs-12">
            <h1 class="text-lg-center" id="hometext">DREAM,</h1>
            <h1 class="text-lg-center" id="hometext">DISCOVER,</h1>
            <h1 class="text-lg-center" id="hometext">EXPERIENCE!</h1>
            <h2 class="text-lg-center" id="text">Live more with wonders.</h2>
            <br>
            <h3 class="text-lg-center" id="spotxt">Try SpotMe free for 30 days*</h3>
            <v-btn id="spot" large color="secondary" @click="submit">SpotMe Free</v-btn>
        </div>
        <div class="row">
            <div class="col">
                <v-img src=" https://github.com/Heavenjes/Final-Web3/blob/master/src/assets/image4.jpg?raw=true" class="responsive-image" id="image1" width="300" height="200" aspect-ratio="1.3"></v-img>
                <v-img src="https://github.com/Heavenjes/Final-Web3/blob/master/src/assets/image5.jpg?raw=true" class="responsive-image" id="image2" width="200" height="200" aspect-ratio="1"></v-img>
            </div>
        </div>
    </div>
</v-container>
</template>

<script>
export default {
    methods: {
        submit: function (e) {
            e.preventDefault();
            this.$router.push("/register");
        }
    }
};
</script>

<style scoped>
#hometext {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
    font-size: 5em;
    font-weight: black;
}

#text {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
    font-weight: normal;
    font-size: 2.5em;
}

#spotxt {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
    font-weight: normal;
    font-size: 1.5em !important;
    color: red;
}

#spot {
    position: absolute;
    width: 134px;
    height: 58px;
    background-color: gray;
    margin-left: 20%;
    border-radius: 30px;
    color: white;
    margin-top: 2%;
    margin-left: 18%;
}

#image1 {
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    margin-left: 8%;
    margin-top: 13%;
    height: auto;
    max-width: 100%;
    position: sticky;
}

#image2 {
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    margin-left: 60%;
    margin-top: -30%;
    height: auto;
    max-width: 100%;
    position: static;
}
</style>
