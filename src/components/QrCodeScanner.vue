<template>
<v-container>
    <v-row class="text-center">
        <v-col class="mb-5" cols="12">
            <v-row justify="center">
                <qrcode-stream @decode="onDecode" @init="onInit" class="cam" />
            </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
            <v-row justify="center">
                <p class="error">{{ error }}</p>
                <v-textarea outlined name="input-7-4" :label="hints" :value="result" class="btn"></v-textarea>
            </v-row>
            <v-row justify="center">
                <v-btn class="primary btn" @click="onCopy">Copy</v-btn>
                <v-btn class="primary btn" @click="onOpen">Open</v-btn>
            </v-row>
        </v-col>

    </v-row>
</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
    QrcodeStream
} from 'vue-qrcode-reader';

@Component({
    name: 'QrCodeScanner',
    components: {
        QrcodeStream
    }
})
export default class QrCodeScanner extends Vue {

    result = '';
    error = '';
    popup = '';
    hints = '';

    onDecode(decodeString: string) {
        console.log(`onDecode ${decodeString}`);
        if (decodeString.length > 0) {
            this.result = decodeString;
        }
        this.hints = 'Scanned';
    }

    onCopy() {
        console.log(`onCopy ${this.result}`);
        const listener = (e: ClipboardEvent) => {
            e.clipboardData!.setData('text/plain', this.result);
            e.preventDefault();
            document.removeEventListener('copy', listener);
        };
        document.addEventListener('copy', listener);
        document.execCommand('copy');
        this.hints = 'Copied';
    }

    onOpen() {
        console.log(`onOpen ${this.result}`);
        this.hints = 'Opened';
        window.open(this.result, '_blank');
        window.open(this.result);
    }

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
    }
}
</script>

<style scoped>
.cam {
    background-color: aquamarine;
    margin: 5%;
}

.btn {
    margin: 1%;
}
</style>
