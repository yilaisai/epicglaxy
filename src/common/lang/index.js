import Vue from "vue"
import VueI18n from "vue-i18n"
import {LangZh} from "./zh"
import {LangEn} from "./en"
import {getLanguage} from "common/js/util"

Vue.use(VueI18n)

export default new VueI18n({
    locale: localStorage.getItem('language') || getLanguage(),
    messages: {
        "zh-CN": LangZh,
        "en-US": LangEn
    }
})
