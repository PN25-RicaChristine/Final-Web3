<template>
  <v-card id="sidebar">
    <v-row justify="center" align="center">
      <v-row>
        <v-col cols="4" id="sidebar" class="mx-auto">
          <v-navigation-drawer class="info" dark permanent>
            <v-list>
              <v-list-item>
                <v-img id="image" src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item>

              <v-list-item link two-line class="title">
                <v-list-item-content>
                  <center>
                    <v-list-item-title>Sandra Adams</v-list-item-title>
                    <v-list-item-subtitle>
                      <li>Online</li>
                    </v-list-item-subtitle>
                  </center>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <template v-slot:append>
              <div class="pa-2">
                <v-btn block>Logout</v-btn>
              </div>
            </template>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="8">
            <v-text-field id="search" :prepend-icon="'mdi-magnify'"></v-text-field>
            <v-btn> Search</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-card>
</template> 
<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "My Account", icon: "account_circle" },
        { title: "Posts", icon: "library_books" }
      ]
    };
  }
};
</script>
<style scoped>
#sidebar {
  padding-top: 35px;
}
#image {
  float: center;
  width: 20px;
}
#sidebar {
  padding-top: 0px;
}
#search{
  width: 50px;
}
</style>
