<template>
    <div class="layout">
        <header-mac class="layout-header"></header-mac>
        <div class="layout-main">
            <left-nav></left-nav>
            <div class="layout-main-view">
                <router-view></router-view>
            </div>
        </div>
        <div class="lrc-panel" v-show="lrcPanalShow"></div>
        <footer-mac class="layout-footer"></footer-mac>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "layout",
        data(){
            return {}
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