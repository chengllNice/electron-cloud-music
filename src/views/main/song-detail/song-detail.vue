<template>
    <div class="song-detail">
        <song-detail-info :data="detailInfo"></song-detail-info>
        <header-menu v-model="selectedMenu" :data="menuList" position="left"></header-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import {getSongListDetail} from "@/server/common";
    import SongDetailInfo from './info/song-detail-info'

    export default {
        name: "song-detail",
        data(){
            return {
                id: this.$route.query.id,
                selectedMenu: 'list',
                menuList: [
                    {
                        id: 'list',
                        name: '歌曲列表',
                        path: '/song-detail/list',
                    },
                    {
                        id: 'comment',
                        name: '评论',
                        path: '/song-detail/comment',
                    },
                    {
                        id: 'collection',
                        name: '收藏者',
                        path: '/song-detail/collection',
                    },
                ],
                songIds: [],
                detailInfo: null
            }
        },
        provide(){
            return {
                detail: this
            }
        },
        components: {
            SongDetailInfo
        },
        mounted(){
            this.getSongListDetail();
        },
        methods: {
            getSongListDetail(){
                let getData = {
                    id: this.id
                };
                getSongListDetail(getData).then(res => {
                    let playlist = res.playlist;
                    playlist.createTime = this.$timeFormat(playlist.createTime, 'date', 'YY-MM-DD');
                    playlist.description = playlist.description.replace(/\n/g, '<br>');
                    this.detailInfo = playlist;
                    let trackIds = this.detailInfo.trackIds;
                    let ids = [];
                    trackIds.forEach(item=>{
                        ids.push(item.id)
                    });
                    this.songIds = ids;
                })
            }
        }
    }
</script>
