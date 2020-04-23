<template>
    <div class="find-music">
        <header-menu v-model="selectedMenu" :data="menuList" position="center"></header-menu>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "find-music",
        data(){
            return {
                selectedMenu: 'personal-recommendation',
                menuList: [
                    {
                        id: 'personal-recommendation',
                        name: '个性推荐',
                        path: '/find-music/personal-recommendation',
                    },
                    {
                        id: 'song-list',
                        name: '歌单',
                        path: '/find-music/song-list',
                    },
                    {
                        id: 'anchor-station',
                        name: '主播电台',
                        path: '/find-music/anchor-station',
                    },
                    {
                        id: 'ranking-list',
                        name: '排行榜',
                        path: '/find-music/ranking-list',
                    },
                    {
                        id: 'singer',
                        name: '歌手',
                        path: '/find-music/singer',
                    },
                    {
                        id: 'latest-music',
                        name: '最新音乐',
                        path: '/find-music/latest-music',
                    }
                ]
            }
        }
    }
</script>