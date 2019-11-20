<template>

<v-img class="white--text align-end" height="100px" src="@/assets/back1.jpg">
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
          <br />
          <v-btn id="submit" class="secondary justify-center" @click="submit">Register</v-btn>
          <br />
          <v-card-text>"Already have an account? Sign in!"</v-card-text>
        </center>
      </div>
    </v-card>
  </v-img>
  <!-- <v-img class="white--text align-end" height="100px" src="@/assets/background.jpg">
    <v-card class="mx-auto" max-width="400">
      <v-card-title color="primary" class="text-center" id="title">Sign Up</v-card-title>
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
  </v-img> -->
</template>
<script>
import AUTH from "@/auth";
import jquery from "jquery";
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

      //for database express
      let link = `http://localhost:3231/accounts/${this.credentials.name}/${this.credentials.uname}/${this.credentials.adds}/${this.credentials.email}/${this.credentials.password}/blogger`;
      jquery.ajax({
        url: link,
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
      //end db
      this.swal.fire("You are now registered!", "Nice one!", "success");
      sessionStorage.setItem("Name", this.credentials.name),
        sessionStorage.setItem("Username", this.credentials.uname),
        sessionStorage.setItem("Address", this.credentials.adds),
        sessionStorage.setItem("Email", this.credentials.email),
        sessionStorage.setItem("Password", this.credentials.password),
        sessionStorage.setItem("Con Password", this.credentials.conpassword);
      sessionStorage.setItem("User type", this.items.label);
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#card {
  float: center;
  position: relative;
  background: linear-gradient(to bottom, 	#CD853F 0%, #ffffff 100%);
  border-radius: 5%;
  border: double black 1px;
}
#title {
  position: absolute;
  text-align: center;
  border-radius: 10%;
  top: -13%;
  left: 37%;
  left: 37%;
  z-index: 2;
}
#circle {
  background: black;
}
#form {
  padding-top: 14%;
  width: 450px;
  margin-left: 20px;
}
</style>
