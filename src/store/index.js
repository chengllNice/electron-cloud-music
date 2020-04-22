import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  // 用户信息
  userInfo: null,
  musicInfo: null,
  //正在播放的fm
  fmInfo: null,
  // 播放列表
  playMusicIdList: [],
  // 播放历史
  historyMusicIdList: [],
  //设备相关信息,
  deviceInfo: {},
  //滚动条相关信息,
  scrollInfo: {},
  //歌词面板控制
  lrcPanalShow: false,
  //路由历史
  routerHistory: [],
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
