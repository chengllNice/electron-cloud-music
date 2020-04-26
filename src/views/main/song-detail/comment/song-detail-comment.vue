<template>
    <div class="song-detail-comment"></div>
</template>

<script>
    import { getSongListComment} from "@/server/find-music";

    export default {
        name: "song-detail-comment",
        inject: ['detail'],
        data(){
            return {
                id: this.$route.query.id,
                getParam: {
                    page: 1,
                    pageSize: 100,
                    total: 0,
                },
                data: [],
            }
        },
        mounted(){
            this.getSongListComment();
        },
        methods: {
            getSongListComment(){
                let params = {
                    id: this.id,
                    limit: this.getParam.pageSize,
                    offset: (this.getParam.page - 1) * this.getParam.pageSize
                };
                getSongListComment(params).then(res => {
                    console.log(res)
                    // let {hotComments, comments, moreHot, total} = res;
                    // this.commentData.comment = res.comments;
                    // if(res.hotComments){
                    //     this.commentData.hot = res.hotComments;
                    // }
                    // this.pageData.total = res.total;
                    // this.header_tab_data[1].value = res.total
                })
            }
        }
    }
</script>