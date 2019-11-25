<template>
  <v-img class="white--text align-end" height="100px" id="image" src="@/assets/back1.jpg">
    <v-card id="card" class="mx-auto" max-width="500">
      <div id="title">
        <v-avatar id="circle" size="150">
          <v-icon dark size="600%">mdi-account</v-icon>
        </v-avatar>
      </div>
      <div id="form">
        <center>
          <v-text-field
            v-model="credentials.uname"
            :rules="[rules.required]"
            label="Username"
            required
            :prepend-icon="'mdi-account'"
          ></v-text-field>
          <v-text-field
            v-model="credentials.password"
            :rules="[rules.required]"
            label="Password"
            required
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            :type="show ? 'text' : 'password'"
            :prepend-icon="'mdi-key-variant'"
          ></v-text-field>
          <br />
          <v-btn id="submit" class="secondary justify-center" @click="submit">Login</v-btn>
          <br />
          <br />
          <v-text href="#">"Forgot password?"</v-text>
          <v-card-text>"Don't have account yet? Sign in here!"</v-card-text>
        </center>
      </div>
    </v-card>
  </v-img>
</template>
<script>
import AUTH from "@/auth";
export default {
  data: () => {
    AUTH;
    return {
      credentials: {
        uname: "",
        password: ""
      },
      show: false,
      checkbox: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },

  methods: {
    submit: function(e) {
      e.preventDefault();
      let user = AUTH.login(this.credentials.uname, this.credentials.password);
      AUTH.setUser(user);
      alert("TestUlit!");
      this.$router.push("/dashboard");
      // if (this.$refs.form.validate()) {
      //   this.$router.push("/dashboard");
      //   alert("valid");
      // }
    }
  }
};
</script>

<style scoped>
#card {
  float: center;
  position: relative;
  margin-bottom: 12%;
  background: linear-gradient(to bottom,	#CD853F 0%, #ffffff 100%);
  border-radius: 5%;
  border: double black 1px;
  
}
#title {
  position: absolute;
  text-align: center;
  border-radius: 10%;
  top: -23%;
  left: 35%;
  z-index: 2;
}
#circle {
  background: black;
}
#form {
  padding-top: 10%;
  padding-bottom: 5%;
  width: 450px;
  margin-left: 20px;
}
</style>
