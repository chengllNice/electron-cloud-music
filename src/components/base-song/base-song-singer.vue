<template>
    <div class="base-song-singer">
        <slot></slot>
        <span class="singer-item" v-for="(item, index) in data" :key="index">
            <span v-if="index !== 0"> / </span>
            <span class="name" @click="handleClick(item)">{{item.name}}</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "base-song-singer",
        props: {
            data: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            handleClick(data){
                this.$emit('click', data);
            }
        }
    }
</script>