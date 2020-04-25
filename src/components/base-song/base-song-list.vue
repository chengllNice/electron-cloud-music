<template>
    <div class="base-song-list">
        <Spin size="large" fix v-if="loading"></Spin>
        <div class="no-data" v-if="!data.length">暂无数据</div>
        <slot></slot>
        <base-song-item v-for="(item, index) in data"
                   :key="index"
                   :data="item"
                   :x="x"
                   :y="y"
                   :ellipsis="ellipsis"
                   :class="itemClass(item, index)"
                   :style="itemStyle" @click="handleClick"></base-song-item>
    </div>
</template>

<script>
    export default {
        name: "base-song-list",
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            },
            colNum: {
                type: Number,
                default: 4
            },
            ellipsis: {
                type: Number,
                default: 1
            },
            x: Number,
            y: Number,
            loading: {
                type: Boolean,
                default: false
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
        methods: {
            handleClick(data){
                this.$emit('click', data)
            }
        }
    }
</script>
