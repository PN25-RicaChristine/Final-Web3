<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>SpotMe</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="error" class="mr-4" id="loginbtn">Login</v-btn>

      <v-btn color="warning" id="signbtn">Sign Up</v-btn>
    </v-app-bar>

    <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="login"
                    type="text"
                    :prepend-icon="'mdi-account'"
                  ><v-icon>mdi-pin</v-icon></v-text-field>
                

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>
<style scoped>
#loginbtn{
    border-radius: 50px !important;
}
#signbtn{
    border-radius: 50px !important;
}
</style>