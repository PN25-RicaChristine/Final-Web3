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
        type="email"
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
        v-model="credentials.conpassword"
        :rules="[rules.required]"
        label="Confirm Password"
        required
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1= !show1"
        :type="show1 ? 'text' : 'password'"
        :prepend-icon="'mdi-key-variant'"
      ></v-text-field>
      <center>
        <v-col cols="12" md="16">
          <v-overflow-btn id="category" class="my-2" color="red" :items="items" label="User Type"></v-overflow-btn>
        </v-col>
        <v-btn id="submit" class="primary justify-center" @click="submit">Login</v-btn>
        <v-card-text>"Already have an account? Sign in!"</v-card-text>
      </center>
    </v-form>
  </v-card>
</template>
<script>
import AUTH from "@/auth";
export default {
  data() {
    return {
      items: [{ text: "User" }, { text: "Blogger" }],
      auth: AUTH,
      credentials: {
        name: "",
        uname: "",
        adds: "",
        email: "",
        password: "",
        conpassword: ""
      },
      show: false,
      show1: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();

      alert("valid");
      AUTH.register(
        this.credentials.name,
        this.credentials.uname,
        this.credentials.adds,
        this.credentials.email,
        this.credentials.password,
        this.credentials.conpassword
      );
      sessionStorage.setItem("Name", this.credentials.name),
        sessionStorage.setItem("Username", this.credentials.uname),
        sessionStorage.setItem("Address", this.credentials.adds),
        sessionStorage.setItem("Email", this.credentials.email),
        sessionStorage.setItem("Password", this.credentials.password),
        sessionStorage.setItem("Con Password", this.credentials.conpassword);
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#card {
  margin-top: 10px;
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
