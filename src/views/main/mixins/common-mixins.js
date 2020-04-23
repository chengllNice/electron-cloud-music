
import {
    getSongDetail,
    getSongUrl} from "@/server/common";

export default {
    data(){
      return {
          url: '',
          detailInfo: null
      }
    },
    methods: {
        async getSongUrl(id){
            let getData = {
                id: id
            };
            await getSongUrl(getData).then(res=>{
                this.url = '';
                if(res.data && res.data.length){
                    this.url = res.data[0].url;
                }
            }).catch(err=>{
                console.log('err',err)
            });
        },
        async getSongDetail(id){
            let getData = {
                ids: id
            };
            let source_path = this.$route.path;
            await getSongDetail(getData).then(res=>{
                let data = res.songs[0];
                this.detailInfo = {
                    picUrl: data.al.picUrl,
                    song_name: data.name,
                    artists: data.ar,
                    album: data.al,
                    alias: data.alia,
                    source_path: { path: source_path, id: ''},
                    data: {
                        album_name: data.al,
                        alias: data.alia,
                        artists: data.ar,
                        duration: this.$timeFormat(data.dt),
                        id: id,
                        maxbr: res.privileges[0].maxbr,
                        mvid: data.mv,
                        picUrl: data.al.picUrl,
                        playStatus: "play",
                        privilege: res.privileges[0],
                        song_name: data.name,
                        sort_num: "01",
                        source_path: { path: source_path, id: ''},
                    }
                };
            }).catch(err=>{
                console.log('err',err)
            })
        },
    }
}