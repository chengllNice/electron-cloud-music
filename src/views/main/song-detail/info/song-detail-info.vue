<template>
    <div class="song-detail-info" v-if="data">
        <div class="cover">
            <base-img :url="data.coverImgUrl" :x="200" :y="200"></base-img>
        </div>
        <div class="info">
            <div class="title-info">
                <span class="type">歌单</span>
                <span class="title">{{data.name}}</span>
            </div>
            <div class="user-info">
                <Avatar :src="data.creator.avatarUrl" />
                <span class="user-name">{{data.creator.nickname}}</span>
                <span>{{data.createTime}}创建</span>
            </div>
            <div class="button-info">
                <ButtonGroup>
                    <base-button type="primary"><i class="iconfont icon-play"></i> 播放全部</base-button>
                    <base-button type="primary"><i class="iconfont icon-plus"></i></base-button>
                </ButtonGroup>
                <base-button><i class="iconfont icon-floder-add"></i> 收藏 (<span>{{subscribedCount}}</span>)</base-button>
                <base-button><i class="iconfont icon-plus"></i> 分享 (<span>{{shareCount}}</span>)</base-button>
                <base-button><i class="iconfont icon-download"></i> 下载全部</base-button>
            </div>
            <div class="tags-info" v-if="data.tags && data.tags.length">
                标签:
                <base-song-singer :data="data.tags"></base-song-singer>
            </div>
            <div class="count-info">
                歌曲数:
                <span>{{data.trackCount}}</span>

                播放数:
                <span>{{playCount}}</span>
            </div>
            <div class="description-info" :class="[!open && 'description-info-close']" v-if="data.description">
                <i :class="['open', 'iconfont', openType]" @click="openClick"></i>
                简介: <span v-html="data.description"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "song-detail-info",
        props: {
           data: {
               type: Object,
               default(){
                   return {}
               }
           }
        },
        data(){
            return {
                openType: 'icon-down',
                open: false
            }
        },
        computed: {
            playCount(){
                return this.$unitFormat(this.data.playCount, '万')
            },
            subscribedCount(){
                return this.$unitFormat(this.data.subscribedCount, '万')
            },
            shareCount(){
                return this.$unitFormat(this.data.shareCount, '万')
            },
        },
        methods: {
            tagClick(){

            },
            openClick(){
                this.open = !this.open;
                this.openType = this.open ? 'icon-up' : 'icon-down';
            }
        }
    }
</script>
