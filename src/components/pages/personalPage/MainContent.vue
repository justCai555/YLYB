<template>
    <div v-if="myArticles != null">

    </div>
    <div v-else>
        <el-empty description="暂未发布文章" />
    </div>
</template>

<script>
    import {ref} from 'vue'
    const myArticles = ref(null)

    export default{
        data(){
            return{
                myArticles:myArticles
            }
        },
        methods:{

        }
    }
</script>

<style>
    
</style>