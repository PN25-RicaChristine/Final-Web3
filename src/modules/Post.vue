<template>
  <v-card max-width="800" class="mx-auto" id="post">
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Jessavel Toring</v-list-item-title>
        <v-list-item-subtitle>time here</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>{{description}}</v-card-text>

    <v-img :src="files" height="194"></v-img>

    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-star</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-comment</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-rating v-model="rating" background-color="yellow" color="yellow" x-large></v-rating>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    id: Number,
    description: String,
    files: String,
    rating: Number,
    time: Date
  }
};
</script>
