import BaseSongSinger from './base-song-singer'
import BaseSongName from './base-song-name'
import BaseSongDetail from './detail/base-song-detail'
import BaseSongList from './base-song-list'
import BaseSongItem from './base-song-item'

const BaseSong = {
    singer: BaseSongSinger,
    name: BaseSongName,
    detail: BaseSongDetail,
    list: BaseSongList,
    item: BaseSongItem,
};

export default BaseSong
