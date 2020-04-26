
const scrollOpt = {
    vuescroll: {},
    scrollPanel: {
        scrollingX: false,
        scrollingY: true,
    },
    rail: {
        gutterOfSide: '1px',//滚动轨道距离侧边的距离
    },
    bar: {
        background: '#e1e1e2',
        keepShow: true,
        hoverStyle: {
            background: '#cfcfd1'
        }
    }
};


const targetTypeEnum = {
    song: {
        id: 1,
        name: '单曲'
    },
    album: {
        id: 10,
        name: '专辑'
    },
    mv: {
        id: 1004,
        name: 'MV'
    },
};

export default {
    scrollOpt,
    targetTypeEnum
}