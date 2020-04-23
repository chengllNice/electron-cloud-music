/*发现音乐*/

const findMusic = r => require.ensure([], () => r(require('../views/main/find-music/find-music')), 'find-music');
//个性推荐
const personalRecommendation = r => require.ensure([], () => r(require('../views/main/find-music/personal-recommendation/personal-recommendation')), 'personal-recommendation');
//歌单
const songList = r => require.ensure([], () => r(require('../views/main/find-music/song-list/song-list')), 'song-list');
//主播电台
const anchorStation = r => require.ensure([], () => r(require('../views/main/find-music/anchor-station/anchor-station')), 'anchor-station');
//排行榜
const rankingList = r => require.ensure([], () => r(require('../views/main/find-music/ranking-list/ranking-list')), 'ranking-list');
//歌手
const singer = r => require.ensure([], () => r(require('../views/main/find-music/singer/singer')), 'singer');
//最新音乐
const latestMusic = r => require.ensure([], () => r(require('../views/main/find-music/latest-music/latest-music')), 'latest-music');

export default {
    path: '/find-music',
    name: 'find-music',
    component: findMusic,
    redirect: '/find-music/personal-recommendation',
    children: [
        {
            path: '/find-music/personal-recommendation',
            name: 'personal-recommendation',
            component: personalRecommendation,
        },
        {
            path: '/find-music/song-list',
            name: 'song-list',
            component: songList,
        },
        {
            path: '/find-music/anchor-station',
            name: 'anchor-station',
            component: anchorStation,
        },
        {
            path: '/find-music/ranking-list',
            name: 'ranking-list',
            component: rankingList,
        },
        {
            path: '/find-music/singer',
            name: 'singer',
            component: singer,
        },
        {
            path: '/find-music/latest-music',
            name: 'latest-music',
            component: latestMusic,
        }
    ]
}
