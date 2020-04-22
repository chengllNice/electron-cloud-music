<template>
    <div class="left-nav">
        <div class="">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </div>
        <div class="list-body">
            <div :class="itemClass(item)" v-for="item in list" :key="item.id" @click="itemClick(item)">
                <div class="list-item-icon" v-if="item.icon"><Icon :type="item.icon" /></div>
                <div class="list-item-name">{{item.name}}</div>
                <template v-if="item.children && item.children.length">
                    <div class="list-item" v-for="children in item.children" :key="children.id" @click="itemClick(children)">
                        <div class="list-item-icon" v-if="children.icon"><Icon :type="children.icon" /></div>
                        <div class="list-item-name">{{children.name}}</div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "left-nav",
        data(){
            return {
                theme3: 'light',
                list: [
                    {
                        id: 'findMusic',
                        icon: 'ios-checkmark-circle-outline',
                        name: '发现音乐',
                    },
                    {
                        id: 'privateFM',
                        icon: 'ios-checkmark-circle-outline',
                        name: '私人FM',
                    },
                    {
                        id: 'video',
                        icon: 'ios-checkmark-circle-outline',
                        name: '视频',
                    },
                    {
                        id: 'friend',
                        icon: 'ios-checkmark-circle-outline',
                        name: '朋友',
                    },
                    {
                        id: 'myMusic',
                        name: '我的音乐',
                        children: [
                            {
                                id: 'iTunes',
                                icon: 'ios-checkmark-circle-outline',
                                name: 'iTunes音乐',
                            },
                            {
                                id: 'downManage',
                                icon: 'ios-checkmark-circle-outline',
                                name: '下载管理',
                            },
                            {
                                id: 'myCloundMusic',
                                icon: 'ios-checkmark-circle-outline',
                                name: '我的音乐云盘',
                            },
                            {
                                id: 'myCollection',
                                icon: 'ios-checkmark-circle-outline',
                                name: '我的收藏',
                            }
                        ]
                    }
                ],
                selected: 'findMusic',
            }
        },
        computed: {
            itemClass(){
                return function (item) {
                    return [
                        'list-item',
                        this.selected === item.id && 'list-item-selected',
                        item.children && item.children.length && 'list-item-group'
                    ]
                }
            }
        },
        mounted(){

        },
        methods: {
            itemClick(data){
                if(data.children) return;
                this.selected = data.id;
                let path = `/${data.id.toLowerCase()}`;
                this.$store.commit('setRouterHistory', path);
                this.$router.push({
                    path: path
                });
            }
        }
    }
</script>