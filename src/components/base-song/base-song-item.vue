<template>
    <div :class="itemClass">
        <div class="song-img" @click="handleClick">
            <slot>
                <base-img v-if="data.picUrl" :url="data.picUrl" :x="x" :y="y"></base-img>
            </slot>

            <div class="song-cover">
                <div class="song-play-count" v-if="data.playCount">{{data.playCount}}</div>
                <div class="song-creator-name" v-if="data.creator">
                    <i class="iconfont icon-user user-icon"></i>
                    {{data.creator.nickname}}
                    <i class="iconfont icon-star mark-star" v-if="userType.includes('star')"></i>
                    <i class="iconfont icon-mark-singer mark-singer" v-if="userType.includes('mark')"></i>
                    <i class="iconfont icon-v mark-vip" v-if="userType.includes('vip')"></i>
                </div>
            </div>
        </div>
        <div class="song-name" @click="handleClick">{{data.name}}</div>
        <base-song-singer class="song-artists" v-if="data.artists" :data="data.artists"></base-song-singer>
    </div>
</template>

<script>
    export default {
        name: "base-song-item",
        props: {
            data: {
                type: Object,
                default(){
                    return {}
                }
            },
            x: Number,
            y: Number,
            ellipsis: {
                type: Number,
                default: 1
            }
        },
        data(){
            return {

            }
        },
        computed: {
            itemClass(){
                return [
                    'base-song-item',
                    `base-song-item-ellipsis-${this.ellipsis}`
                ]
            },
            userType(){
                let result = [];
                switch (this.data.creator.userType) {
                    case 2:
                    case 3:
                    case 10:
                        result.push('vip');
                        break;
                    case 200:
                    case 201:
                    case 202:
                        result.push('star');
                        break;
                    case 4:
                        result.push('mark');
                        break;
                }
                return result;
            }
        },
        mounted(){

        },
        methods: {
            handleClick(){
                this.$emit('click', this.data)
            }
        }
    }
</script>
