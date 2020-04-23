import Header from './header'
import Footer from './footer'
import LeftNav from './left-nav'
import HeaderMenu from './header-menu'
import Carousel from './carousel'
import SongList from './song-list'
import BaseTitle from './base-title'

const components = {
    HeaderMac: Header.mac,
    HeaderWin: Header.win,
    FooterMac: Footer.mac,
    FooterWin: Footer.win,
    LeftNav,
    HeaderMenu,
    Carousel,
    SongList,
    SongItem: SongList.item,
    BaseTitle
};

const install = (Vue) => {
    if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: '0.0.1',
    install,
    ...components
};

export default API;
