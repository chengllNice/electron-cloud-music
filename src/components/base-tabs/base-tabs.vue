<template>
    <div class="base-tabs">
        <div class="tab-item" v-for="item in data" :key="item.id" @click="handleClick(item)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-tabs",
        props: {
            data: {
                type: Array,
                default(){
                    return []
                }
            },
            value: String,
            underLine: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                currentValue: ''
            }
        },
        mounted() {
            this.currentValue = this.value;
        },
        methods: {
            handleClick(data){
                this.currentValue = data.id;
                this.$emit('input', this.currentValue);
            }
        },
        watch: {
            value(newVal){
                this.currentValue = newVal;
            }
        }
    }
</script>