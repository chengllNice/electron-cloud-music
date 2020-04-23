<template>
    <div :class="itemClass">
        <div class="song-img">
            <img :src="`${data.picUrl}?param=${x}y${y}`" :alt="data.name">

            <div class="song-cover">
                <div class="song-play-count">{{data.playCount}}</div>
            </div>
        </div>
        <div class="song-name">{{data.name}}</div>
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
            x: {
                type: Number,
                default: 300
            },
            y: {
                type: Number,
                default: 300
            },
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

        }
    }
</script>
