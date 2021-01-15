import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enMessage from './locales/en.json'
import cnMessage from './locales/cn.json'

/**
 * @reference https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/
 * https://phrase.com/blog/posts/ultimate-guide-to-vue-localization-with-vue-i18n
 * https://lokalise.com/blog/vue-i18n/
 * https://viblo.asia/p/vuejs-da-ngon-ngu-trong-ung-dung-vue-6J3Zg2wLKmB
 */
Vue.use(VueI18n);

const messages = {
    'en': enMessage,
    'zh': cnMessage
};
export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',  // set fallback locale
    messages // set locale messages
});
