<template>
  <v-img class="white--text align-end" height="100px" src="@/assets/back1.jpg">
    <div id="cardto">
      <v-card id="card" class="mx-auto" max-width="500">
        <div id="title">
          <v-avatar id="circle" size="150">
            <v-icon dark size="600%">mdi-account-plus</v-icon>
          </v-avatar>
        </div>
        <div id="form">
          <center>
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
            <v-select
              :items="items"
              :prepend-icon="'mdi-account'"
              v-model="credentials.type"
              label="User Type"
            />
            <v-btn id="submit" class="secondary justify-center" @click="submit">Register</v-btn>
            <v-card-text>"Already have an account? Sign in!"</v-card-text>
          </center>
        </div>
      </v-card>
    </div>
  </v-img>
</template>
<script>
import AUTH from "@/auth";
// import jquery from "jquery";
export default {
  data() {
    return {
      items: ["User", "Blogger"],
      auth: AUTH,
      credentials: {
        name: "",
        uname: "",
        adds: "",
        email: "",
        password: "",
        conpassword: "",
        type: ""
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
      AUTH.register(
        this.credentials.name,
        this.credentials.uname,
        this.credentials.adds,
        this.credentials.email,
        this.credentials.password,
        this.credentials.conpassword,
        this.credentials.type
      );
      //for database express
      // let link = `http://localhost:3030/accounts/${this.credentials.name}/${
      //   this.credentials.uname
      // }/${this.credentials.adds}/${this.credentials.email}/${
      //   this.credentials.password
      // }/${this.credentials.type}`;
      // jquery.ajax({
      //   url: link,
      //   method: "POST",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // });
      //end db
      sessionStorage.setItem("Name", this.credentials.name),
        sessionStorage.setItem("Username", this.credentials.uname),
        sessionStorage.setItem("Address", this.credentials.adds),
        sessionStorage.setItem("Email", this.credentials.email),
        sessionStorage.setItem("Password", this.credentials.password),
        sessionStorage.setItem("Con Password", this.credentials.conpassword);
      sessionStorage.setItem("User type", this.credentials.type);
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#card {
  float: center;
  position:relative;
  background: linear-gradient(to bottom, #cd853f 0%, #ffffff 100%);
  border-radius: 5%;
  border: double black 1px;
  margin-bottom: 2%;
}
#title {
  position: absolute;
  text-align: center;
  border-radius: 10%;
  top: -13%;
  left: 35%;
  z-index: 2;
}
#circle {
  background: black;
}
#form {
  padding-top: 10%;
  width: 450px;
  margin-left: 20px;
}
/* #cardto{
  float:center;
  position: relative;
  bottom:100%;
} */
</style>