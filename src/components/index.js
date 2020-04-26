import Header from './header'
import Footer from './footer'
import LeftNav from './left-nav'
import HeaderMenu from './header-menu'
import Carousel from './carousel'
import BaseTitle from './base-title'
import BaseTable from './base-table'
import BaseImg from './base-img'
import BaseSong from './base-song'
import BaseTabs from './base-tabs'
import BasePage from './base-page'
import BaseButton from './base-button'

const components = {
    HeaderMac: Header.mac,
    HeaderWin: Header.win,
    FooterMac: Footer.mac,
    FooterWin: Footer.win,
    LeftNav,
    HeaderMenu,
    Carousel,
    BaseTitle,
    BaseTable,
    BaseImg,
    BaseSongName: BaseSong.name,
    BaseSongSinger: BaseSong.singer,
    BaseSongDetail: BaseSong.detail,
    BaseSongList: BaseSong.list,
    BaseSongItem: BaseSong.item,
    BaseTabs,
    BasePage,
    BaseButton
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
