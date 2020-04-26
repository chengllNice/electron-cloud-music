<template>
    <div class="layout">
        <header-mac class="layout-header"></header-mac>
        <div class="layout-main">
            <left-nav></left-nav>
            <div class="layout-main-view">
                <vue-scroll :ops="scrollOpt">
                    <router-view></router-view>
                </vue-scroll>
            </div>
        </div>
        <div class="lrc-panel" v-show="lrcPanalShow"></div>
        <footer-mac class="layout-footer"></footer-mac>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Config from '@/config/config'
    export default {
        name: "layout",
        data(){
            return {
                scrollOpt: Config.scrollOpt
            }
        },
        computed: {
            ...mapState(['lrcPanalShow'])
        },
        mounted(){

        },
        methods: {

        }
    }
</script>