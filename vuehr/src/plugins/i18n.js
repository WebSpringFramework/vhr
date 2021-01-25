import {createI18n} from 'vue-i18n';
import enMessage from '../assets/locales/en.json'
import cnMessage from '../assets/locales/cn.json'

/**
 * @reference https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/
 * https://phrase.com/blog/posts/ultimate-guide-to-vue-localization-with-vue-i18n
 * https://lokalise.com/blog/vue-i18n/
 * https://viblo.asia/p/vuejs-da-ngon-ngu-trong-ung-dung-vue-6J3Zg2wLKmB
 */
const messages = {
    'en': enMessage,
    'zh': cnMessage
};
export default createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',  // set fallback locale
    /*locale: process.env.VUE_APP_I18N_LOCALE || "en",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",*/
    messages // set locale messages
});
