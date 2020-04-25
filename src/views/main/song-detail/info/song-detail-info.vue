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
            <div class="tags-info">
                标签:
                <span v-for="(item, index) in data.tags" :key="index">
                    <span v-if="index !== 0"> / </span>
                    <span class="name" @click="tagClick(item)">{{item}}</span>
                </span>
            </div>
            <div class="count-info">
                歌曲数:
                <span>{{data.trackCount}}</span>

                播放数:
                <span>{{playCount}}</span>
            </div>
            <div class="description-info" :class="[!open && 'description-info-close']">
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
            }
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
