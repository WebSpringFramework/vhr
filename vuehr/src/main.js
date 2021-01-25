import {createApp, h} from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus, * as MessageBox from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


import {deleteRequest, getRequest, postKeyValueRequest, postRequest, putRequest} from "./utils/api";
import {initMenu} from "./utils/menus";
import 'font-awesome/css/font-awesome.min.css'
import i18n from "./plugins/i18n";

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next();
    } else {
        if (window.sessionStorage.getItem("user")) {
            initMenu(router, store);
            next();
        } else {
            next('/?redirect=' + to.path);
        }
    }
})

const app = createApp({
    render: () => h(App)
});
app.use(store);
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.globalProperties.$ELEMENT = {size: 'small', zIndex: 3000};
app.globalProperties.$alert = MessageBox.alert
app.globalProperties.$confirm = MessageBox.confirm
app.globalProperties.postRequest = postRequest;
app.globalProperties.postKeyValueRequest = postKeyValueRequest;
app.globalProperties.putRequest = putRequest;
app.globalProperties.deleteRequest = deleteRequest;
app.globalProperties.getRequest = getRequest;

app.mount('#app');
