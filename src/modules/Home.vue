<template>
<div class="flex-container">
    <div class="row">
        <div class="col-md-6 col-sm6 col-xs-12">
            <h1 id="hometext">DREAM,</h1>
            <h1 id="hometext">DISCOVER,</h1>
            <h1 id="hometext">EXPERIENCE!</h1>
            <p id="home">Live more with wonders</p>
            <p id="spotxt">Try SpotMe free for 30 days*</p>
        </div>
        <div class="col-md-6 col-sm6 col-xs-12">
            <br>
            <button type="button" class="btn btn-secondary" id="spot">SpotMe Free</button>
        </div>
        <v-row="center" justify="end">
            <v-card class="mx-auto" color="aqua" max-width="400" height="200">
                <v-img src=" https://github.com/Heavenjes/Final-Web3/blob/master/src/assets/image4.jpg?raw=true" class="responsive-image" id="image1" width="300" height="200" aspect-ratio="1.3"></v-img>
            </v-card>
            <v-card class="mx-auto1" color="aqua" max-width="400" height="200">
                <v-img src=" https://github.com/Heavenjes/Final-Web3/blob/master/src/assets/image5.jpg?raw=true" class="responsive-image" id="image2" width="200" height="200" aspect-ratio="1.3"></v-img>
            </v-card>
        <v-row>
    </div>
</div>
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
    margin-left: 5%;
}

#home {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
    font-weight: normal;
    font-size: 2.5em;
    white-space: nowrap;
    margin-left: 13%;
}

#spotxt {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
    font-weight: normal;
    font-size: 1.5em !important;
    color: red;
    white-space: nowrap;
    margin-left: 25%;
}

#spot {
    position: absolute;
    width: 130px;
    height: 50px;
    border-radius: 30px;
    margin-top: 420px;
    background-color: gray;
    color: aliceblue;
    left: 1%;
    line-height: 30px;
    white-space: nowrap;
}

.mx-auto {
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    margin-top: 8%;

}

.mx-auto1 {
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    margin-top: 8%;
    margin-left: 5%;
}

.flex-container>div {
    margin-top: 2%;
    width: 500px;
    text-align: center;
    background-color: aqua;
    height: 600px;
    display: flex;
    flex-wrap: nowrap;
    margin-left: 5%;
}
</style>
