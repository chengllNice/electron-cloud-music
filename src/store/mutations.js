
export default {
  setMusicInfo(state, info){
    state.musicInfo = state.musicInfo || {};
    Object.keys(info).forEach(key=>{
      state.musicInfo[key] = info[key];
    });
  },
  getDeviceInfo(state, info){
    state.deviceInfo = info || {};
  },
  getScrollInfo(state, info){
    state.scrollInfo = info || {};
  },
  setLrcPanalShow(state, info){
    state.lrcPanalShow = info || false;
  },
  setRouterHistory(state, info){
    let history = state.routerHistory || [];
    history.push(info);
    state.routerHistory = history;
  },
}
