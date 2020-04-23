<template>
    <div class="personal-recommendation">
        <carousel :data="bannerData" @click="bannerClick"></carousel>

        <base-title title="推荐歌单">
            <span>更多</span>
        </base-title>
        <song-list :data="recommendedSongList"></song-list>
    </div>
</template>

<script>
    import {
        getBanner,
        getRecommendedSongList} from "@/server/find-music";
    import Config from '@/config/config'
    import CommonMixins from '@/views/main/mixins/common-mixins'

    export default {
        name: "personal-recommendation",
        mixins: [CommonMixins],
        data(){
            return {
                bannerData: [],
                recommendedSongList: []
            }
        },
        mounted(){
            this.initData();
        },
        methods: {
            initData(){
                this.getBannerData();
                this.getPersonalized();
            },
            async getBannerData(){
                getBanner().then(res=> {
                    this.bannerData = res.banners;
                })
            },
            //获取推荐歌单
            async getPersonalized(){
                let getData = {
                    limit: 10
                };
                getRecommendedSongList(getData).then(res=> {
                    let data = res.result;
                    data.forEach(item=>{
                        item.playCount = this.$unitFormat(item.playCount, '万')
                    });
                    this.recommendedSongList = data;
                    // this.recommend_data.data.push(...format_data);
                    // this.$unitFormat(this.recommend_data.data, 'playCount');
                })
            },
            async bannerClick(data){
                switch (data.targetType) {
                    //专辑
                    case Config.targetTypeEnum.album:
                        this.$router.push({
                            path: '/album',
                            query: { id: data.targetId}
                        });
                        break;
                    //mv
                    case Config.targetTypeEnum.mv:
                        this.$router.push({
                            path: '/mv',
                            query: { id: data.targetId, type: 0}
                        });
                        break;
                    //单曲
                    case Config.targetTypeEnum.song:
                        await this.get_music_detail(data.targetId);
                        await this.get_music_url(data.targetId);
                        this.$store.commit('setMusicInfo',{
                            id: data.targetId,
                            url: this.url,
                            playStatus: 'play',
                            ...this.detailInfo
                        });
                        break;
                }
            }
        }
    }
</script>
