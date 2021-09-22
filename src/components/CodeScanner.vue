<template>
<v-container>
    <v-row class="text-center">
        <v-col class="mb-5" cols="12">
            <v-row justify="center">
                <div class="cam">
                    <video ref="scanner" />
                </div>
            </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
            <v-row justify="center" class="text-row">
                <p class="error">{{ error }}</p>
                <v-textarea outlined dense auto-grow rows=1 name="input-7-4" :label="hints" :value="result" class="btn"></v-textarea>
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
    BrowserMultiFormatReader,
    Exception
} from "@zxing/library";

@Component({
    name: 'CodeScanner',
    components: {}
})
export default class CodeScanner extends Vue {

    result = '';
    error = '';
    popup = '';
    hints = '';
    isLoading = true;
    codeReader = new BrowserMultiFormatReader();
    isMediaStreamAPISupported = navigator && navigator.mediaDevices && "enumerateDevices" in navigator.mediaDevices

    $refs!: {
        scanner: HTMLVideoElement
    }

    mounted() {
        console.log('mounted');
        if (!this.isMediaStreamAPISupported) {
            let msg = "Media Stream API is not supported";
            alert(msg);
            throw new Exception(msg);
        }
        this.codeReader.decodeFromVideoDevice(
            null,
            this.$refs.scanner,
            (result, err) => {
                if (result) {
                    this.onDecode(result.getText());
                }
            }
        );
    }

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

}
</script>

<style scoped>
.cam {
    background-color: whitesmoke;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    max-height: 50%;
}

.text-row {
    margin-left: 5%;
    margin-right: 5%;
    width: 90% !important;
}

.btn {
    margin: 1%;
}

video {
    max-width: 100%;
    max-height: 100%;
}

</style>
