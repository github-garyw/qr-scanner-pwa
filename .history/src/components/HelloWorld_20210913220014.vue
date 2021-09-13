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
            <h2 class="headline font-weight-bold mb-3">Important Links</h2>

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

        async onInit(promise) {
            // show loading indicator

            try {
                const {
                    capabilities
                } = await promise

                // successfully initialized
            } catch (error) {
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

    data: () => ({
        ecosystem: [{
                text: "vuetify-loader",
                href: "https://github.com/vuetifyjs/vuetify-loader",
            },
            {
                text: "github",
                href: "https://github.com/vuetifyjs/vuetify",
            },
            {
                text: "awesome-vuetify",
                href: "https://github.com/vuetifyjs/awesome-vuetify",
            },
        ],
        importantLinks: [{
                text: "Documentation",
                href: "https://vuetifyjs.com",
            },
            {
                text: "Chat",
                href: "https://community.vuetifyjs.com",
            },
            {
                text: "Made with Vuetify",
                href: "https://madewithvuejs.com/vuetify",
            },
            {
                text: "Twitter",
                href: "https://twitter.com/vuetifyjs",
            },
            {
                text: "Articles",
                href: "https://medium.com/vuetify",
            },
        ],
        whatsNext: [{
                text: "Explore components",
                href: "https://vuetifyjs.com/components/api-explorer",
            },
            {
                text: "Select a layout",
                href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
            },
            {
                text: "Frequently Asked Questions",
                href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
            },
        ],
    }),
});
</script>
