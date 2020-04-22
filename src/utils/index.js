
import Utils from './utils'

export default {
    version: '0.0.1',
    install: function (Vue) {
        // Vue.prototype.$deepClone = deepClone;
        Vue.prototype.$typeOf = Utils.typeOf;
        // Vue.prototype.$setObjectValue = setObjectValue;
        // Vue.prototype.$getObjectValue = getObjectValue;
        Vue.prototype.$unitFormat = Utils.unitFormat;
        // Vue.prototype.$uiconfigFormat = uiconfigFormat;
        // Vue.prototype.$tableListInit = tableListInit;
        // Vue.prototype.$timeFormat = timeFormat;
        Vue.prototype.$localStorage = Utils.localStorage;
        // Vue.prototype.$commonApi = commonApi;
    }
}