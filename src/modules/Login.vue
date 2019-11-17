<template>
  <v-card id="card" class="mx-auto" width="500" outlined>
    <center>
      <v-card-title color="primary" class="text-center" id="title">Login</v-card-title>
    </center>
    <v-form ref="form" id="form">
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
      <br>
      <center>
        <v-btn id="submit" class="primary justify-center" @click="submit()">Login</v-btn>
        <br>
        <br>
        <v-text href="#">"Forgot password?"</v-text>
        <v-card-text>"Don't have account yet? Sign in here!"</v-card-text>
        <br>
      </center>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data: () => {
    return {
      credentials: {
        name: "",
        uname: "",
        adds: "",
        email: "",
        password: "",
        conpasswrd: ""
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
    submit() {
      if (this.$refs.form.validate()) {
        this.$router.push('/dashboard');
        alert("valid");
      }
    }
  }
};
</script>

<style scoped>
#card {
  margin-top: 30px;
}
#title {
  text-align: center;
  background-color: aqua;
}
#form {
  width: 450px;
  margin-left: 20px;
}
#submit {
  float: center;
}
</style>
