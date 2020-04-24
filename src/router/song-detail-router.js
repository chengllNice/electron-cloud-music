/*公共路由*/

//歌单详情
const songDetail = r => require.ensure([], () => r(require('../views/main/song-detail/song-detail')), 'song-detail');

//歌曲列表
const songDetailList = r => require.ensure([], () => r(require('../views/main/song-detail/list/song-detail-list')), 'song-detail-list');
//歌单评论
const songDetailComment = r => require.ensure([], () => r(require('../views/main/song-detail/comment/song-detail-comment')), 'song-detail-comment');
// 歌单收藏者
const songDetailCollection = r => require.ensure([], () => r(require('../views/main/song-detail/collection/song-detail-collection')), 'song-detail-collection');


export default {
    path: '/song-detail',
    name: 'song-detail',
    component: songDetail,
    redirect: '/song-detail/list',
    children: [
        {
            path: '/song-detail/list',
            name: 'song-detail-list',
            component: songDetailList,
        },
        {
            path: '/song-detail/comment',
            name: 'song-detail-comment',
            component: songDetailComment,
        },
        {
            path: '/song-detail/collection',
            name: 'song-detail-collection',
            component: songDetailCollection,
        },
    ]
}
