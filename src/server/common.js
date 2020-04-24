import Api from './index'

const ajaxGet = Api.ajaxGet;


// 获取歌曲详情
export const getSongDetail = data => ajaxGet('/song/detail',data);
// 获取歌曲播放地址
export const getSongUrl = (data) => ajaxGet('/song/url',data);

// 获取歌单详情
export const getSongListDetail = (data) => ajaxGet('/playlist/detail',data);