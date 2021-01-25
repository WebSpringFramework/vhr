import axios from 'axios'
import router from '../router'
import {mymessage} from '@/utils/mymessage';
import i18n from "@/plugins/i18n";
import * as Message from "element-plus";

axios.interceptors.response.use(success => {
    if (success.status && success.status === 200 && success.data.status === 500) {
        Message.error({message: success.data.msg})
        return;
    }
    if (success.data.msg) {
        Message.success({message: success.data.msg})
    }
    return success.data;
}, error => {
    if (error.response.status === 504 || error.response.status === 404) {
        Message.error({message: i18n.t('messageError.theServerEaten')})
    } else if (error.response.status === 403) {
        Message.error({message: i18n.t('messageError.insufficientPermissionsContactAdministrator')})
    } else if (error.response.status === 401) {
        mymessage.error({message: error.response.data.msg ? error.response.data.msg : '尚未登录，请登录'})
        router.replace('/');
    } else if (error.response.data.msg) {
        Message.error({message: error.response.data.msg})
    } else {
        Message.error({message: i18n.t('messageError.unknownMistake')})
    }
})

let base = '';

export const postKeyValueRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params
    })
}
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params
    })
}
