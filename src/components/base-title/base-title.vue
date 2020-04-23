<template>
    <div :class="titleClass">
        <span class="title">{{title}}</span>
        <div class="slot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-title",
        props: {
            title: String,
            underLine: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {}
        },
        computed: {
            titleClass(){
                return [
                    'base-title',
                    this.underLine && 'base-title-under-line'
                ]
            }
        },
        components: {},
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>
