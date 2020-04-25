<template>
    <div class="header-mac" :style="{'-webkit-app-region': 'drag'}">
<!--        <div class="header-os-control">-->
<!--            <span class="close"></span>-->
<!--            <span class="min"></span>-->
<!--            <span class="max"></span>-->
<!--        </div>-->
        <div class="header-left">
            <div class="back">
                <i class="iconfont icon-left"></i>
                <!--<Icon type="ios-arrow-back" />-->
            </div>
            <div class="forward">
                <i class="iconfont icon-right"></i>
                <!--<Icon type="ios-arrow-forward" />-->
            </div>
        </div>
        <div class="header-right">
            <div class="header-search">
                <Input class="c-input-default" prefix="ios-search" v-model="searchValue" placeholder="搜索" clearable style="width: 200px" />
            </div>
            <div class="header-setting">
                <i class="iconfont icon-setting"></i>
                <!--<Icon type="ios-settings-outline" />-->
            </div>
            <div class="header-notice">
                <i class="iconfont icon-email"></i>
                <!--<Icon type="ios-mail-outline" />-->
            </div>
            <div class="header-theme">
                <i class="iconfont icon-theme"></i>
                <!--<Icon type="ios-shirt-outline" />-->
            </div>
            <div class="header-model">
                <i class="iconfont icon-scale"></i>
                <!--<Icon type="ios-albums-outline" />-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-mac",
        data(){
            return {
                searchValue: ''
            }
        },
        mounted(){

        },
        methods: {

        }
    }
</script>
