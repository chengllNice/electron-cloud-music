<template>
    <div class="song-list">
        <song-item v-for="(item, index) in data"
                   :key="index"
                   :data="item"
                   :ellipsis="ellipsis"
                   :class="itemClass(item, index)"
                   :style="itemStyle"></song-item>
    </div>
</template>

<script>
    export default {
        name: "song-list",
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            },
            colNum: {
                type: Number,
                default: 5
            },
            ellipsis: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {}
        },
        computed: {
            itemStyle(){
                return {
                    width: `${100 / this.colNum}%`
                }
            },
            itemClass(){
                return function (item, index) {
                    return [
                        index % this.colNum === 0 && 'song-item-no-margin'
                    ]
                }
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>
