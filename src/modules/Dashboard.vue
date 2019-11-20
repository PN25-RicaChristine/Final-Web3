<template>
  <div>
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
        <v-card class="mx-auto" max-width="800">
          <div>
            <v-card-text>
              <h2>Create Post</h2>
            </v-card-text>
          </div>
          <div>
            <div id="text">
              <v-text-field
                v-model="description.input"
                id="desbody"
                label="Description..."
                outlined
              ></v-text-field>
            </div>
            <v-card-actions>
              <v-file-input
                v-model="files"
                color="deep-purple accent-4"
                counter
                multiple
                placeholder="Add Photo"
                prepend-icon="mdi-camera"
                :show-size="1000"
                id="fileinput"
              ></v-file-input>
              <v-spacer></v-spacer>
              <v-btn color="info" id="postbutton">Post</v-btn>
            </v-card-actions>
          </div>
        </v-card>
        <v-card max-width="800" class="mx-auto" id="post">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card max-width="800" class="mx-auto" id="post">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
      files: [],

      description: {
        input: ""
      }
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
  width: 3%;
  margin-top: 20%;
}
#title {
  background-color: lightgray;
  padding: 1%;
  margin-bottom: 2%;
}
#input {
  width: 95%;
  height: 50%;
  margin-left: 2%;
}
#post {
  margin-top: 4%;
}
#text {
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
}
#postbutton {
  margin-right: 2%;
}
#fileinput {
  margin-left: 2%;
}
</style>
