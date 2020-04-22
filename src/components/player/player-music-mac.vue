<template>
    <div class="player-music-mac">
        <div class="hide" id="jplayerObj"></div>

        <div class="play-progress" ref="progressBar" @click="progressControl">
            <div class="play-progress-current" :style="{width: play_precent + '%'}">
                <div class="play-progress-inner">
                    <!--                    <img v-if="loading" src="../../../../static/img/loading.svg" alt="">-->
                </div>
            </div>
        </div>

        <div class="play-info"></div>
    </div>
</template>

<script>
    import jPlayer from 'jplayer'
    import { mapState } from 'vuex'
    export default {
        name: "player-music-mac",
        data(){
            return {
                loading: false,
                volume: this.$localStorage.getStorage('volume') || 50,
                duration: {
                    text: '00:00',//转换后
                    m: '',//原时长
                },
                currentTime: {
                    text: '00:00',//转换后
                    m: '',//原时长
                },
                playStatus: 'pause',//当前播放状态，play正在播放 pause暂停
                playPrecent: 0,
                jPlayer: null,
                playType: [
                    {
                        id: 'sequence',
                        icon: 'icon-list_play',
                        title: '顺序播放'
                    },
                    {
                        id: 'repeat',
                        icon: 'icon-loop_play',
                        title: '循环播放'
                    },
                    {
                        id: 'single',
                        icon: 'icon-single_play',
                        title: '单曲循环'
                    },
                    {
                        id: 'random',
                        icon: 'icon-random_play',
                        title: '随机播放'
                    }
                ],
                playTypeActive: "sequence"
            }
        },
        computed: {
            ...mapState(['musicInfo', 'playMusicList','historyMusicList'])
        },
        mounted(){
            this.$nextTick(()=>{
                this.init();
            })
        },
        methods: {
            init(){
                if(!this.jPlayer){
                    this.jPlayer = $('#jplayerObj');
                }
                this.jplayerInit();
            },
            jplayerInit(){
                let vue = this;
                let volume = vue.volume / 100;
                this.$store.commit('setMusicInfo',{playStatus: 'pause'});
                this.jPlayer.jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3: vue.musicInfo.url
                        });
                    },
                    wmode: "window",
                    supplied: 'mp3',
                    volume: volume
                });
                this.jplayerListen();
            },
            jplayerListen(){
                this.jplayerTimeUpdate();
                this.jplayerEnd();
            },
            jplayerTimeUpdate(){
                this.jPlayer.bind($.jPlayer.event.timeupdate, (e) => {
                    this.loading=false;
                    this.duration.text = this.$timeFormat( e.jPlayer.status.duration * 1000 );
                    this.duration.m = e.jPlayer.status.duration;
                    this.currentTime.text = this.$timeFormat( e.jPlayer.status.currentTime * 1000 );
                    this.currentTime.m = e.jPlayer.status.currentTime;
                    this.playPrecent = e.jPlayer.status.currentPercentAbsolute;
                    this.volume = this.$typeOf(e.jPlayer.status.volume) === 'undefined' ? this.volume : e.jPlayer.status.volume * 100;
                    this.$store.commit('setMusicInfo', {currentTime: this.currentTime.m});
                });
            },
            jplayerEnd(){
                let vue = this;
                this.jPlayer.bind($.jPlayer.event.ended, (e) => {
                    let index = vue.playMusicList.indexOf(vue.musicInfo.data);
                    let len = vue.playMusicList.length;
                    let id = vue.musicInfo.id || '';
                    let data = vue.musicInfo.data;

                    switch (vue.playTypeActive) {
                        case "sequence":
                            break;
                        case "repeat":
                            break;
                        case "single":
                            break;
                        case "random":
                            break;
                    }
                    if(vue.playTypeActive.index == 0){
                        if(index < vue.playMusicList.data.length-1){
                            id = vue.playMusicList.data[index+1].id;
                            data = vue.playMusicList.data[index+1];
                        }
                    }else if(vue.playTypeActive.index == 1){
                        if(index >= vue.playMusicList.data.length-1){
                            id = vue.playMusicList.data[0].id;
                            data = vue.playMusicList.data[0];
                        }else{
                            id = vue.playMusicList.data[index+1].id;
                            data = vue.playMusicList.data[index+1];
                        }
                    }else if(vue.playTypeActive.index == 2){
                        this.againPlay();
                    }else if(vue.playTypeActive.index == 3){
                        let radom_index = Math.floor(Math.random()*vue.play_music_list.data.length);
                        id = vue.play_music_list.data[radom_index].id;
                        data = vue.play_music_list.data[radom_index];
                    }
                    this.$store.commit('setMusicInfo',{id: id, data: data});
                });
            },
        }
    }
</script>