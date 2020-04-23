import Api from './index'

const ajaxGet = Api.ajaxGet;


// 获取banner
export const getBanner = data => ajaxGet('/banner',data);

// 获取推荐歌单
export const getRecommendedSongList = data => ajaxGet('/personalized',data);
