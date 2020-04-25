<template>
    <div class="song-list">
        <base-song-list :data="data"
                        :ellipsis="2"
                        :colNum="4"
                        :loading="loading"
                        @click="handleClick"></base-song-list>
        <base-page v-if="!loading" :total="getParam.total" :page="getParam.page" :page-size="getParam.pageSize" @change="pageChange"></base-page>
    </div>
</template>

<script>
    import {getSongList} from "@/server/find-music";

    export default {
        name: "song-list",
        data(){
            return {
                data: [],
                getParam: {
                    page: 1,
                    pageSize: 100,
                    total: 0,
                },
                loading: true
            }
        },
        mounted(){
            this.getSongList();
        },
        methods: {
            getSongList(){
                let limit = this.getParam.pageSize;
                if(this.getParam.page === 1){
                    limit = this.getParam.pageSize - 1;
                }
                let offset = (this.getParam.page - 1) * limit;
                let param = {
                    limit: limit,
                    offset: offset - 1,
                };
                this.loading = true;
                this.data = [];
                getSongList(param).then(res => {
                    let data = res.playlists;
                    this.data = [];
                    data.forEach(item => {
                        item.picUrl = item.coverImgUrl;
                        item.playCount = this.$unitFormat(item.playCount, '万');
                    });
                    this.data = data;
                    this.getParam.total = res.total || 0;
                    this.loading = false;
                })
            },
            pageChange(page){
                this.getParam.page = page;
                this.getSongList();
            },
            handleClick(){

            }
        }
    }
</script>
