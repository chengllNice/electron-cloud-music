<template>
    <div class="personal-recommendation">
        <carousel :data="bannerData" @click="bannerClick"></carousel>
    </div>
</template>

<script>
    import {getBanner} from "@/server/find-music";
    import Config from '@/config/config'
    import CommonMixins from '@/views/main/mixins/common-mixins'

    export default {
        name: "personal-recommendation",
        mixins: [CommonMixins],
        data(){
            return {
                bannerData: []
            }
        },
        mounted(){
            this.initData();
        },
        methods: {
            initData(){
                this.getBannerData();
            },
            async getBannerData(){
                getBanner().then(res=> {
                    this.bannerData = res.banners;
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