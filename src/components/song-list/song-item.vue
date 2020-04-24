<template>
    <div :class="itemClass">
        <div class="song-img" @click="handleClick">
            <base-img :url="data.picUrl" :x="x" :y="y"></base-img>

            <div class="song-cover">
                <div class="song-play-count">{{data.playCount}}</div>
            </div>
        </div>
        <div class="song-name" @click="handleClick">{{data.name}}</div>
        <base-song-singer class="song-artists" v-if="data.artists" :data="data.artists"></base-song-singer>
    </div>
</template>

<script>
    export default {
        name: "song-item",
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
                    'song-item',
                    `song-item-ellipsis-${this.ellipsis}`
                ]
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
