<template>
    <div class="song-detail-list">
        <base-table :columns="columns" :data="data" stripe>
            <template slot="index" slot-scope="data">
                <span class="index">{{data.row.index}}</span>
            </template>
            <template slot="action" slot-scope="data">
                <span class="index">{{data.row.index}}</span>
            </template>
            <template slot="title" slot-scope="data">
                <div class="title">
                    <span class="index">{{data.row.name}}</span>
                    <span v-if="data.row.sq">SQ</span>
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
                        title: '',
                        slot: 'index',
                    },
                    {
                        title: '',
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
                data: []
            }
        },
        mounted(){

        },
        methods: {
            getSongDetail(ids){
                let getData = {
                    ids: ids.join(',') || this.detail.songIds.join(',')
                };
                getSongDetail(getData).then(res => {
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
                    }
                    this.data = songs;
                })
            }
        },
        watch: {
            'detail.songIds': {
                handler(newVal){
                    this.getSongDetail(newVal);
                },
                deep: true
            }
        }
    }
</script>