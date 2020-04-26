<template>
    <div class="song-detail-list">
        <base-table :columns="columns" :data="data" stripe :loading="loading">
            <template slot="index" slot-scope="data">
                <span class="index">{{data.row.index}}</span>
            </template>
            <template slot="action" slot-scope="data">
                <span class="song-action">
                    <i class="iconfont icon-heart iconfont-small" @click="heartClick(data.row)"></i>
                    <i class="iconfont icon-download iconfont-small" @click="downloadClick(data.row)"></i>
                </span>
            </template>
            <template slot="title" slot-scope="data">
                <div class="song-title">
                    <span class="song-name" :title="data.row.name + data.row.aliaText">
                        {{data.row.name}}
                        <template v-for="(item, index) in data.row.alia">
                            <span class="song-alia" :key="index">({{item}})</span>
                        </template>
                    </span>
                    <span class="sq" v-if="data.row.sq"><i class="iconfont icon-sq"></i></span>
                    <span class="mv" v-if="data.row.mv" @click="mvClick(data.row)"><i class="iconfont icon-play-block"></i></span>
                </div>
            </template>
            <template slot="singer" slot-scope="data">
                <base-song-singer :data="data.row.ar"></base-song-singer>
            </template>
            <template slot="album" slot-scope="data">
                <span class="album">{{data.row.al.name}}</span>
            </template>
            <template slot="duration" slot-scope="data">
                <span class="index">{{data.row.duration}}</span>
            </template>
        </base-table>
    </div>
</template>

<script>
    import {getSongDetail} from "@/server/common";

    export default {
        name: "song-detail-list",
        inject: ['detail'],
        data(){
            return {
                id: this.$route.query.id,
                columns: [
                    {
                        title: ' ',
                        width: 60,
                        align: 'right',
                        slot: 'index',
                    },
                    {
                        title: ' ',
                        width: 50,
                        slot: 'action',
                    },
                    {
                        title: '音乐标题',
                        slot: 'title',
                    },
                    {
                        title: '歌手',
                        slot: 'singer',
                    },
                    {
                        title: '专辑',
                        slot: 'album',
                    },
                    {
                        title: '时长',
                        width: 80,
                        slot: 'duration',
                    }
                ],
                data: [],
                loading: true
            }
        },
        mounted(){
            this.getSongDetail();
        },
        methods: {
            getSongDetail(){
                if(!this.detail || !this.detail.songIds || !Array.isArray(this.detail.songIds) || !this.detail.songIds.length){
                    return
                }
                let params = {
                    ids: this.detail.songIds.join(',')
                };
                this.loading = true;
                getSongDetail(params).then(res => {
                    let songs = res.songs;
                    let privileges = res.privileges;
                    for (let i = 0; i < songs.length; i++){
                        songs[i]['index'] = this.$zeroFormat(i + 1);
                        songs[i]['mvid'] = songs[i].mv;
                        songs[i]['mv'] = this.$isPrivilege('mv', songs[i]);
                        songs[i]['duration'] = this.$timeFormat(songs[i].dt, 'time', 'mm:ss');
                        for (let j = 0; j < privileges.length; j++){
                            if(songs[i].id === privileges[j].id){
                                songs[i]['privileges'] = privileges[j];
                                songs[i]['sq'] = this.$isPrivilege('sq', privileges[j]);
                                break;
                            }
                        }

                        songs[i]['aliaText'] = '';
                        for (let j = 0; j < songs[i].alia.length; j++){
                            songs[i]['aliaText'] += `(${songs[i].alia[j]})`;
                        }
                    }
                    this.data = songs;
                    this.loading = false;
                })
            },
            heartClick(data){
                console.log(data)
            },
            downloadClick(data){
                console.log(data)
            },
            mvClick(data){
                console.log(data)
            }
        },
        watch: {
            'detail.songIds': {
                handler(){
                    this.getSongDetail();
                },
                deep: true
            }
        }
    }
</script>
