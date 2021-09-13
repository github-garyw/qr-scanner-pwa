<template>
<v-container>
    <v-row class="text-center">
        <v-col cols="12">

        </v-col>

        <v-col class="mb-4">

        </v-col>

        <v-col class="mb-5" cols="12">
            <v-row justify="center">
                <qrcode-stream @decode="onDecode" @init="onInit" />
            </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
            <p class="error">{{ error }}</p>

            <v-row justify="center">

            </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
            <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

            <v-row justify="center">

            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
    QrcodeStream
} from 'vue-qrcode-reader';

export default Vue.extend({
    name: "HelloWorld",

    methods: {
        onDecode(decodeString: string) {
            console.log(decodeString);
        },

        async onInit(promise: any) {
            // show loading indicator

            try {
                const {
                    capabilities
                } = await promise

                // successfully initialized
            } catch (error) {
              console.error(error);
                if (error.name === 'NotAllowedError') {
                    // user denied camera access permisson
                } else if (error.name === 'NotFoundError') {
                    // no suitable camera device installed
                } else if (error.name === 'NotSupportedError') {
                    // page is not served over HTTPS (or localhost)
                } else if (error.name === 'NotReadableError') {
                    // maybe camera is already in use
                } else if (error.name === 'OverconstrainedError') {
                    // did you requested the front camera although there is none?
                } else if (error.name === 'StreamApiNotSupportedError') {
                    // browser seems to be lacking features
                }
            } finally {
                // hide loading indicator
            }
        },
    },

    data() {
        return {
            result: '',
            error: '',
        }
    },

});
</script>
