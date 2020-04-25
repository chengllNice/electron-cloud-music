<template>
    <div class="base-page">
        <Page :total="total"
              :current.sync="page"
              :page-size="pageSize"
              :show-total="showTotal"
              @on-change="handleChange"/>
    </div>
</template>

<script>
    export default {
        name: "base-page",
        props: {
            total: {
                type: Number,
                default: 0
            },
            page: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 0
            },
            showTotal: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        computed: {},
        components: {},
        created() {
        },
        mounted() {
        },
        methods: {
            handleChange(page){
                this.$emit('change', page);
            }
        }
    }
</script>
