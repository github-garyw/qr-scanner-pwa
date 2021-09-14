<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <div class="d-flex align-center">
        QR Code scanner
      </div>
    </v-app-bar>

    <v-main>
      <QrCodeScanner />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import QrCodeScanner from "./components/QrCodeScanner.vue";

export default Vue.extend({
  name: "App",

  components: {
    QrCodeScanner,
  },

  data: () => ({
    //
  }),
});
</script>
