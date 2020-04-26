<template>
    <div :class="menuClass">
        <div class="header-menu-list">
            <div class="header-menu-item"
                 :class="[ currentValue === item.id && 'header-menu-item-selected']"
                 v-for="item in data"
                 :key="item.id"
                 @click="handleClick(item)">
                {{item.name}}
            </div>
        </div>
        <div class="header-menu-slot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-menu",
        props: {
            data: {
                type: Array,
                default(){
                    return []
                }
            },
            value: String,
            position: {
                type: String,
                default: 'left',
                validate(value){
                    return ['left', 'center', 'right'].includes(value);
                }
            },
            underline: Boolean,
        },
        data(){
            return {
                currentValue: '',
            }
        },
        computed: {
            menuClass(){
                return [
                    'header-menu',
                    `header-menu-${this.position}`,
                    this.underline && `header-menu-underline`,
                    this.$slots.default && `is-slot`,
                ]
            }
        },
        mounted(){
            this.currentValue = this.value;
            this.initRouter();
        },
        methods: {
            initRouter(){
                let path = this.$route.path;
                let selectedItem = this.data.filter(item=>{
                    return item.path === path;
                });
                if(selectedItem && selectedItem.length){
                    this.handleClick(selectedItem[0]);
                }
            },
            handleClick(data){
                this.currentValue = data.id;
                let path = this.$route.path;
                if(path !== data.path){
                    this.$router.push({
                        path: data.path,
                        query: {...this.$route.query, ...data.query}
                    });
                }
                this.$emit('input', this.currentValue);
            }
        },
        watch: {
            value(newVal){
                this.currentValue = newVal;
            },
            '$route': function () {
                this.initRouter();
            }
        }
    }
</script>
