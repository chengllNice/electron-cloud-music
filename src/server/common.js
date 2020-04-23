import Api from './index'



// 获取歌曲详情
export const getSongDetail = data => Api.ajaxGet('/song/detail',data);
// 获取歌曲播放地址
export const getSongUrl = (data) => Api.ajaxGet('/song/url',data);