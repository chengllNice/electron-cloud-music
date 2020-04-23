<template>
    <div class="carousel">
        <div class="list">
            <transition v-for="(item, index) in data" :key="index">
                <div @click="handleClick(item)"
                     :class="itemClass(item, index)">
                    <img :src="item.imageUrl" :alt="item.typeTitle">
                    <div class="item-cover" v-if="index != itemActiveIndex"></div>
                    <div class="img-type" :style="{backgroundColor: item.titleColor}">{{item.typeTitle}}</div>
                </div>
            </transition>
        </div>
        <div class="dot-list">
            <div :class="dotClass(item, index)"
                 v-for="(item, index) in data"
                 :key="index"
                 @click="dotClick(index)"></div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "carousel",
        props: {
            data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                itemActiveIndex: 0,
                translateX: '0',
                interval: null,
                mainItemWidth: 408,
            }
        },
        computed: {
            ...mapState(['deviceInfo']),
            itemClass(){
                return function (item, index) {
                    return [
                        'item',
                        index === this.itemActiveIndex && 'item-active',
                        index === this.itemActiveIndexPre && 'item-active-pre',
                        index === this.itemActiveIndexNext && 'item-active-next'
                    ]
                }
            },
            dotClass(){
                return function (item, index) {
                    return [
                        'dot-item',
                        index === this.itemActiveIndex && 'dot-active'
                    ]
                }
            },
            itemActiveIndexPre(){
                let result = 0;
                if(this.itemActiveIndex === 0 ){
                    result = this.data.length - 1;
                }else{
                    result = this.itemActiveIndex - 1;
                }
                return result;
            },
            itemActiveIndexNext(){
                let result = 0;
                if(this.itemActiveIndex === this.data.length - 1 ){
                    result = 0;
                }else{
                    result = this.itemActiveIndex + 1;
                }
                return result;
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init(){
                this.translateX = ($('.carousel .list').width() - this.mainItemWidth) / 2 || 0;
                clearInterval(this.interval);
                this.interval = setInterval(() => {
                    this.play();
                },4000)
            },
            play(){
                this.itemActiveIndex++;
                if(this.itemActiveIndex >= this.data.length){
                    this.itemActiveIndex = 0;
                }
            },
            dotClick(index){
                this.itemActiveIndex = index;
                this.init();
            },
            handleClick(data){
                this.$emit('click', data);
            },
        }
    }
</script>