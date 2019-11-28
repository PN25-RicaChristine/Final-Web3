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
          <p style="color:red">{{message}}</p>
          <br />
          <v-btn id="submit" class="secondary justify-center" @click="submit">Login</v-btn>
          <br />
          <br />
          <v-text href="#">"Forgot password?"</v-text>
          <v-card-text>
            "Don't have account yet?
            <a @click="redirect('/register')">Sign up here</a>!"
          </v-card-text>
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
      message: "",
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
      let self = this;
      e.preventDefault();
      let user = AUTH.login(this.credentials.uname, this.credentials.password);
      AUTH.setUser(user);

      this.axios
        .post("http://localhost:3000/api/users/login", {
          username: this.credentials.uname,
          password: this.credentials.password
        })
        .then(function(response) {
          if (response.data == "Succesfully log in!") {
            alert(response.data);
            self.$router.push("/dashboard");
          } else {
            self.message = response.data;
          }
        });
    },
    redirect(router) {
      this.$router.push(router);
    },
    handleresize() {
      if (window.innerWidth < 1280) {
        this.resize = true;
      } else {
        this.resize = false;
      }
    },
    created() {
      window.addEventListener("resize", this.handleresize);
      this.handleresize();
    },
    destroyed() {
      window.removeEventListener("resize", this.handleresize);
    }
  }
};
</script>

<style scoped>
#card {
  float: center;
  position: relative;
  margin-bottom: 20%;
  background: linear-gradient(to bottom, #cd853f 0%, #ffffff 100%);
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
