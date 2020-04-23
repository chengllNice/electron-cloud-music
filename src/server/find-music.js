import Api from './index'



// 获取banner
export const getBanner = data => Api.ajaxGet('/banner',data);