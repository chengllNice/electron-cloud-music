<template>
    <div class="base-table">
        <Spin size="large" fix v-if="loading"></Spin>
        <Table :columns="columns"
               :data="data"
               :stripe="stripe"
               :size="size"
               :show-header="showHeader"
               :disabled-hover="disabledhover"
               :highlight-row="highlightRow"
               @on-current-change="handleCurrentChange"
               @on-row-dblclick="handleRowDbclick"
               @on-row-click="handleRowClick">
            <template v-for="(slotItem, slotIndex) in slotColumns"
                      :slot="slotItem.slot"
                      slot-scope="rowData">
                <slot :name="slotItem.slot" v-bind="rowData"></slot>
            </template>
        </Table>

        <base-page v-if="!(hidePageOnTotalNull && page.total === 0)" :total="page.total" :page="page.page" :page-size="page.pageSize"></base-page>
    </div>
</template>

<script>
    export default {
        name: "base-table",
        props: {
            columns: {
                type: Array,
                default(){
                    return []
                }
            },
            data: {
                type: Array,
                default(){
                    return []
                }
            },
            page: {
                type: Object,
                default(){
                    return {
                        total: 0,
                        page: 1,
                        pageSize: 0
                    }
                }
            },
            hidePageOnTotalNull: {
                type: Boolean,
                default: true
            },
            showHeader: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: 'small'
            },
            stripe: {
                type: Boolean,
                default: false
            },
            disabledhover: {
                type: Boolean,
                default: false
            },
            highlightRow: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {

            }
        },
        computed: {
            slotColumns(){
                return this.columns.filter(item=>{
                    return item.slot && item.slot !== ''
                })
            }
        },
        mounted(){

        },
        methods: {
            handleCurrentChange(){

            },
            handleRowDbclick(){

            },
            handleRowClick(){

            }
        }
    }
</script>
