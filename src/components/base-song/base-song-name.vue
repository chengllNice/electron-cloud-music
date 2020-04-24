<template>
    <div class="base-song-name" :title="title">
        <div class="name">
            {{name}}
            <span class="description">{{description}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-song-name",
        props: {
            name: String,
            description: String
        },
        computed: {
            title(){
                return `${this.name} ${this.description}`
            }
        }
    }
</script>