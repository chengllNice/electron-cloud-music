<template>
    <div class="personal-recommendation">
        <carousel :data="bannerData" @click="bannerClick"></carousel>

        <base-title title="推荐歌单">
            <span>更多</span>
        </base-title>
        <song-list :data="recommendedSongList" :ellipsis="2" :colNum="5" @click="recommendedSongClick"></song-list>

        <base-title title="独家放送">
            <span>更多</span>
        </base-title>
        <song-list :data="exclusiveDelivery" :ellipsis="2" :colNum="3" :y="180"></song-list>


        <base-title title="最新音乐">
            <span>更多</span>
        </base-title>
        <div class="latest-music">
            <base-table class="latest-music-pre" :columns="latestMusic.columns" :data="latestMusic.data.slice(0,5)" :show-header="false">
                <template slot-scope="data" slot="picUrl">
                    <base-img :url="data.row.picUrl" :x="60" :y="60"></base-img>
                </template>
                <template slot-scope="data" slot="index">
                    <span class="index">{{data.row.index}}</span>
                </template>
                <template slot-scope="data" slot="detail">
                    <base-song-name :name="data.row.name" :description="data.row.alias"></base-song-name>
                    <base-song-singer :data="data.row.song.artists">
                        <span v-if="data.row.sq">SQ</span>
                    </base-song-singer>
                </template>
                <template slot-scope="data" slot="mv">
                    <span v-if="data.row.mv">mv</span>
                </template>
            </base-table>
            <base-table class="latest-music-next" :columns="latestMusic.columns" :data="latestMusic.data.slice(5,10)" :show-header="false">
                <template slot-scope="data" slot="picUrl">
                    <base-img :url="data.row.picUrl" :x="60" :y="60"></base-img>
                </template>
                <template slot-scope="data" slot="index">
                    <span>{{data.row.index}}</span>
                </template>
                <template slot-scope="data" slot="detail">
                    <base-song-name :name="data.row.name" :description="data.row.alias"></base-song-name>
                    <base-song-singer :data="data.row.song.artists">
                        <span v-if="data.row.sq">SQ</span>
                    </base-song-singer>
                </template>
                <template slot-scope="data" slot="mv">
                    <span v-if="data.row.mv">mv</span>
                </template>
            </base-table>
        </div>


        <base-title title="推荐MV">
            <span>更多</span>
        </base-title>
        <song-list :data="recommendedMv" :ellipsis="1" :colNum="4" :y="180"></song-list>


        <base-title title="推荐电台">
            <span>更多</span>
        </base-title>
        <div class="anchor-station">
            <base-table class="pre" :columns="anchorStation.columns" :data="anchorStation.data.slice(0,5)" :show-header="false">
                <template slot-scope="data" slot="picUrl">
                    <base-img :url="data.row.picUrl" :x="60" :y="60"></base-img>
                </template>
                <template slot-scope="data" slot="index">
                    <span class="index">{{data.row.index}}</span>
                </template>
                <template slot-scope="data" slot="detail">
                    <base-song-name :name="data.row.name" :description="data.row.alias"></base-song-name>
                    <base-song-singer :data="data.row.song.artists">
                        <span v-if="data.row.sq">SQ</span>
                    </base-song-singer>
                </template>
                <template slot-scope="data" slot="mv">
                    <span v-if="data.row.mv">mv</span>
                </template>
            </base-table>
            <base-table class="next" :columns="anchorStation.columns" :data="anchorStation.data.slice(5,10)" :show-header="false">
                <template slot-scope="data" slot="picUrl">
                    <base-img :url="data.row.picUrl" :x="60" :y="60"></base-img>
                </template>
                <template slot-scope="data" slot="index">
                    <span>{{data.row.index}}</span>
                </template>
                <template slot-scope="data" slot="detail">
                    <base-song-name :name="data.row.name" :description="data.row.alias"></base-song-name>
                    <base-song-singer :data="data.row.song.artists">
                        <span v-if="data.row.sq">SQ</span>
                    </base-song-singer>
                </template>
                <template slot-scope="data" slot="mv">
                    <span v-if="data.row.mv">mv</span>
                </template>
            </base-table>
        </div>

    </div>
</template>

<script>
    import {
        getBanner,
        getRecommendedSongList,
        getExclusiveDelivery,
        getLatestMusic,
        getRecommendedMv,
        getAnchorStation} from "@/server/find-music";

    import {latestMusicData, anchorStationData} from "./index";

    import Config from '@/config/config'
    import CommonMixins from '@/views/main/mixins/common-mixins'

    export default {
        name: "personal-recommendation",
        mixins: [CommonMixins],
        data(){
            return {
                bannerData: [],
                recommendedSongList: [],
                exclusiveDelivery: [],
                latestMusic: latestMusicData,
                recommendedMv: [],
                anchorStation: anchorStationData,
            }
        },
        mounted(){
            this.initData();
        },
        methods: {
            initData(){
                this.getBannerData();
                this.getPersonalized();
                this.getExclusiveDelivery();
                this.getLatestMusic();
                this.getRecommendedMv();
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
            // 独家放送
            async getExclusiveDelivery(){
                getExclusiveDelivery().then(res=>{
                    this.exclusiveDelivery = res.result;
                })
            },
            // 最新音乐
            async getLatestMusic(){
                getLatestMusic().then(res=>{
                    let data = res.result;
                    data.forEach((item, index)=>{
                        item.index = this.$zeroFormat(index + 1);
                        let alias = '';
                        if(item.song.alias && Array.isArray(item.song.alias)){
                            item.song.alias.forEach(aliasItem=>{
                                alias += `(${aliasItem}) `
                            });
                        }
                        item.alias = alias;
                        item.sq = this.$isPrivilege('sq', item.song.privilege);
                        item.mv = this.$isPrivilege('mv', item.song);
                    });
                    this.latestMusic.data = data;
                })
            },
            // 推荐MV
            async getRecommendedMv(){
                getRecommendedMv().then(res=>{
                    this.recommendedMv = res.result;
                })
            },
            // 推荐电台
            async getAnchorStation(){
                getAnchorStation().then(res=>{
                    let data = res.result;
                    data.forEach((item, index)=>{
                        item.index = this.$zeroFormat(index + 1);
                        let alias = '';
                        if(item.song.alias && Array.isArray(item.song.alias)){
                            item.song.alias.forEach(aliasItem=>{
                                alias += `(${aliasItem}) `
                            });
                        }
                        item.alias = alias;
                        item.sq = this.$isPrivilege('sq', item.song.privilege);
                        item.mv = this.$isPrivilege('mv', item.song);
                    });
                    this.latestMusic.data = data;
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
            },
            recommendedSongClick(data){
                this.$router.push({
                    path: '/song-detail/list',
                    query: {
                        id: data.id
                    }
                })
            }
        }
    }
</script>
