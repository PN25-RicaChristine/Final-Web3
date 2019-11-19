<template>
  <v-card id="card" class="mx-auto" width="500" outlined>
    <center>
      <v-card-title color="primary" class="text-center" id="title">Sign Up</v-card-title>
    </center>
    <v-form ref="form" id="form">
      <v-text-field
        v-model="credentials.name"
        :rules="[rules.required]"
        label="Name"
        required
        :prepend-icon="'mdi-account'"
      ></v-text-field>
      <v-text-field
        v-model="credentials.uname"
        :rules="[rules.required]"
        label="Username"
        required
        :prepend-icon="'mdi-account'"
      ></v-text-field>
      <v-text-field
        v-model="credentials.adds"
        :rules="[rules.required]"
        label="Address"
        required
        :prepend-icon="'mdi-map-marker'"
      ></v-text-field>
      <v-text-field
        v-model="credentials.email"
        :rules="[rules.required]"
        label="E-mail"
        required
        :prepend-icon="'mdi-mail'"
      ></v-text-field>
      <v-text-field
        v-model="credentials.password"
        :rules="[rules.required]"
        label="Password"
        required
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show= !show"
        :type="show ? 'text' : 'password'"
        :prepend-icon="'mdi-key-variant'"
      ></v-text-field>
      <v-text-field
        v-model="credentials.conpasswrd"
        :rules="[rules.required]"
        label="Confirm Password"
        required
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1= !show1"
        :type="show1 ? 'text' : 'password'"
        :prepend-icon="'mdi-key-variant'"
      ></v-text-field>
      <center>
        <v-btn id="submit" class="primary justify-center" @click="submit()">Login</v-btn>
        <v-card-text>"Already have an account? Sign in!"</v-card-text>
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
      show:false,
      show1:false,
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
        alert("valid");
      }
    },
  }
};
</script>

<style scoped>
#card {
  position: absolute;
  top: 100px;
  right: 100px;
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
