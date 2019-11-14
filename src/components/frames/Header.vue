<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>SpotMe</v-toolbar-title>

      <v-spacer></v-spacer>
      <!--Login modal-->
      <div class="text-center">
        <v-dialog v-model="login" width="600" height="60">
          <template v-slot:activator="{ on }">
            <v-btn color="warning" id="signbtn" v-on="on">Login</v-btn>
          </template>

          <v-card>
            <v-flex>
              <v-card-title text-align="center" class="headline grey lighten-2">Login</v-card-title>
            </v-flex>
            <v-app id="inspire">
              <v-col cols="50">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Username"
                      name="login"
                      type="text"
                      :prepend-icon="'mdi-account'"
                    >
                      <v-icon>mdi-pin</v-icon>
                    </v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      :prepend-icon="'mdi-key-variant'"
                    />
                  </v-form>
                </v-card-text>`
                <v-card-actions>
                  <v-spacer/>
                  <v-flex>
                    <v-btn color="primary">Login</v-btn>
                  </v-flex>
                </v-card-actions>
              </v-col>
            </v-app>
          </v-card>
        </v-dialog>
      </div>
      <!--Sign Up modal-->
      <div class="text-center">
        <v-dialog v-model="signup" width="600" height="60">
          <template v-slot:activator="{ on }">
            <v-btn color="warning" id="signbtn" v-on="on">Sign Up</v-btn>
          </template>

          <v-card>
            <v-flex>
              <v-card-title text-align="center" class="headline grey lighten-2">Sign Up</v-card-title>
            </v-flex>
            <v-app id="inspire">
              <v-col cols="50">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Name"
                      name="name"
                      type="text"
                      :prepend-icon="'mdi-account'"
                    >
                      <v-icon>mdi-pin</v-icon>
                    </v-text-field>
                    <v-text-field
                      label="Username"
                      name="uname"
                      type="text"
                      :prepend-icon="'mdi-account'"
                    >
                      <v-icon>mdi-pin</v-icon>
                    </v-text-field>
                    <v-text-field
                      label="Address"
                      name="login"
                      type="text"
                      :prepend-icon="'mdi-map-marker'"
                    >
                      <v-icon>mdi-pin</v-icon>
                    </v-text-field>
                    <v-text-field
                      label="Email"
                      name="email"
                      type="email"
                      :prepend-icon="'mdi-mail'"
                    >
                      <v-icon>mdi-pin</v-icon>
                    </v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      :prepend-icon="'mdi-key-variant'"
                    />
                     <v-text-field
                      id="password"
                      label="Confirm Password"
                      name="password"
                      type="password"
                      :prepend-icon="'mdi-key-variant'"
                    />
                  </v-form>
                </v-card-text>`
                <v-card-actions>
                  <v-spacer/>
                  <v-flex>
                    <v-btn color="primary">Register</v-btn>
                  </v-flex>
                </v-card-actions>
              </v-col>
            </v-app>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>
  </div>
</template>
<style scoped>
#loginbtn {
  border-radius: 50px !important;
}
#signbtn {
  border-radius: 50px !important;
}
</style>

<script>
export default {
  data() {
    return {
      login: false,
      signup: false
    };
  }
};
</script>