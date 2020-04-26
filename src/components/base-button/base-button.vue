<template>
    <!--    <div class="base-button"></div>-->
    <Button :type="type" :shape="shape" :icon="icon" :ghost="ghost">
        <slot></slot>
    </Button>
</template>

<script>
    export default {
        name: "base-button",
        props: {
            type: {
                type: String,
                default: ''
            },
            shape: {
                type: String,
                default: 'circle'
            },
            icon: {
                type: String,
                default: ''
            },
            ghost: Boolean
        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>