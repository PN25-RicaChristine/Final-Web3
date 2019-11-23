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
        <div class="col-md-6 col-sm6 col-xs-12"><br>
            <button type="button" class="btn btn-secondary" id="spot">SpotMe Free</button>
        </div>
        <div class='box'>
            <v-img src=" https://github.com/Heavenjes/Final-Web3/blob/master/src/assets/image4.jpg?raw=true" class="responsive-image" id="image1" width="300" height="200" aspect-ratio="1.3"></v-img>

        </div>
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
    margin-left: 10%;
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
    left: 10%;
    line-height: 30px;
    white-space: nowrap;

}

#image1 {
    /* -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg); */
    margin-left: 0%;
    margin-top: 0%;
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

.flex-container>div {
    margin-top: 2%;
    margin-left: 5%;
    width: 500px;
    text-align: center;
    background-color:white;
    height: 600px;
    display: flex;
    flex-wrap: nowrap;
}

.box {
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    display: flex;
    flex-wrap: nowrap;
    background-color: gray;
    margin-left: 5%;
    height: 200px;
    margin-top:15%;

}
</style>
