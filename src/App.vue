<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <div class="d-flex align-center">
        Code scanner
      </div>
    </v-app-bar>

    <v-main>
      <CodeScanner />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import CodeScanner from "./components/CodeScanner.vue";

export default Vue.extend({
  name: "App",

  components: {
    CodeScanner,
  },

  data: () => ({
    //
  }),
});
</script>
