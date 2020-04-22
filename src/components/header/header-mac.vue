<template>
    <div class="header-mac" :style="{'-webkit-app-region': 'drag'}">
<!--        <div class="header-os-control">-->
<!--            <span class="close"></span>-->
<!--            <span class="min"></span>-->
<!--            <span class="max"></span>-->
<!--        </div>-->
        <div class="header-left">
            <div class="back">
                <Icon type="ios-arrow-back" />
            </div>
            <div class="forward">
                <Icon type="ios-arrow-forward" />
            </div>
        </div>
        <div class="header-right">
            <div class="header-search">
                <Input class="c-input-default" prefix="ios-search" v-model="searchValue" placeholder="搜索" clearable style="width: 200px" />
            </div>
            <div class="header-setting">
                <Icon type="ios-settings-outline" />
            </div>
            <div class="header-notice">
                <Icon type="ios-mail-outline" />
            </div>
            <div class="header-theme">
                <Icon type="ios-shirt-outline" />
            </div>
            <div class="header-model">
                <Icon type="ios-albums-outline" />
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