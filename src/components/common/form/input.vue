<template>
    <Input v-model="currentValue" placeholder="Enter something..." style="width: 300px" />
</template>

<script>
    export default {
        name: "input",
        props: {
          value: String
        },
        data(){
            return {
                currentValue: ''
            }
        },
        methods: {

        },
        watch: {

        }
    }
</script>