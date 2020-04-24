<template>
    <img :src="`${url}?param=${x}y${y}`" alt="">
</template>

<script>
    export default {
        name: "base-img",
        props: {
            url: String,
            x: {
                type: Number,
                default: 300
            },
            y: {
                type: Number,
                default: 300
            },
        },
        computed: {

        }
    }
</script>