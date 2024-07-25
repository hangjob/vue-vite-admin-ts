import {createApp} from 'vue'
import "@/packages/style/tailwind.css"
import "@/packages/style/reset.css"
import "@/packages/style/style.less"
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import App from '@/packages/App.vue'
import router from "@/packages/router/index.js";
import {createPinia} from "pinia"
import Framework from "@/packages/framework/index.js";
import * as helpers from "@/packages/helpers"
import * as http from "@/packages/http/request.js"
import * as radash from "radash"
import * as hooksPlus from "vue-hooks-plus"
import * as dayjs from "dayjs"

Array.prototype.first = function () {
    return this.slice(0, 1)[0];
}
const pina = createPinia()
const app = createApp(App)

const framework = new Framework({
    app,
    pina,
    router,
    helpers: {...helpers}, // 可以持续扩展
    radash,
    hooksPlus,
    dayjs,
    http,
    nprogress
});

export {
    app,
    pina,
    router,
    helpers, // 可以持续扩展
    radash,
    hooksPlus,
    dayjs,
    framework,
    http,
    nprogress
}
