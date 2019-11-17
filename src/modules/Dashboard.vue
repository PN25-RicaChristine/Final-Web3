<template>
  <v-row justify="center" align="center">
    <v-row>
      <v-col cols="4" id="sidebar" class="mx-auto" height="750" width="auto">
          <v-navigation-drawer class="info" dark permanent>
            <v-list>
              <v-list-item> 
                  <v-img id="image" src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item>

              <v-list-item link two-line>
                <v-list-item-content>
                  <center>
                  <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                  <v-list-item-subtitle><li>Online</li></v-list-item-subtitle>
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
      <v-col cols="8"></v-col>
    </v-row>
  </v-row>
</template> 
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Account", icon: "account_box" },
        { title: "Admin", icon: "gavel" }
      ]
    };
  }
};
</script>
<style scoped>
#sidebar {
  float: left;
  padding-top: 30px;
}
#image{
  float:center;
  width:20px;
}
</style>
