import Api from './index'

const ajaxGet = Api.ajaxGet;


// 获取banner
export const getBanner = data => ajaxGet('/banner',data);

// 获取推荐歌单
export const getRecommendedSongList = data => ajaxGet('/personalized',data);

// 独家放送
export const getExclusiveDelivery = data => ajaxGet('/personalized/privatecontent',data);

// 新歌推荐（最新音乐）
export const getLatestMusic = data => ajaxGet('/personalized/newsong',data);

// 推荐MV
export const getRecommendedMv = data => ajaxGet('/personalized/mv',data);

// 推荐电台
export const getAnchorStation = data => ajaxGet('/personalized/djprogram',data);


// 歌单列表
export const getSongList = data => ajaxGet('/top/playlist',data);


// 精品歌单列表
export const getQualitySongList = data => ajaxGet('/top/playlist/highquality',data);

// 获取歌单评论
export const getSongListComment = (data) => ajaxGet('/comment/playlist',data);

// 获取热门评论
export const getHotComment = (data) => ajaxGet('/comment/hot',data);
