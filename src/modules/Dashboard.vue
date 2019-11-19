<template>
  <v-row>
    <v-col cols="auto" lg="3">
      <v-navigation-drawer class="secondary" dark permanent>
        <v-list>
          <v-list-item>
            <v-img id="image" src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item>

          <v-list-item link two-line class="title">
            <v-list-item-content>
              <v-list-item-title>Sandra Adams</v-list-item-title>
              <v-list-item-subtitle>
                <li>Online</li>
              </v-list-item-subtitle>
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
      <template>
        <v-card class="mx-auto" max-width="900">
          <v-card-title color="info" class="text-center" id="title">Create Post</v-card-title>
          <center>
            <div id="desbody">
              <v-text-field label="Description..." outlined></v-text-field>
            </div>
          </center>
          <v-card-actions>
            <v-file-input
              v-model="files"
              color="deep-purple accent-4"
              counter
              multiple
              placeholder="Add Photo"
              prepend-icon="mdi-camera"
              :show-size="1000"
            ></v-file-input>
            <v-spacer></v-spacer>
            <v-btn color="info">Post</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "My Account", icon: "account_circle" },
        { title: "Posts", icon: "library_books" }
      ],
      files: []
    };
  }
};
</script>
<style scoped>
#image {
  float: center;
  width: 20px;
}
#sidebar {
  padding-top: 0px;
}
#search {
  width: 50px;
}
#desbody {
  width: 850px;
  margin-top: 20px;
}
#textfield {
  height: 500px;
}
#title {
  background-color: lightgray;
}

/* #category {
  float: center;
} */
</style>
