<template>
    <div id="home_nav">
        <el-row :gutter="20" justify="center">
        <el-col :span="8" :offset="0">
            <span class="search">
                <el-input class="search_input" v-model="home_search" placeholder="" size="normal" clearable></el-input>
                <el-button type="primary" size="default" @click="">搜索</el-button>
            </span>
        </el-col>
        <el-col :span="2" :offset="0">精选1</el-col>
        <el-col :span="2" :offset="0">精选2</el-col>
        <el-col :span="2" :offset="0">精选3</el-col>
        <el-col :span="2" :offset="0">精选4</el-col>
    </el-row>

    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
    },
    methods: {

    }
}
</script>

<style scoped>
#home_nav{
    padding-top: 1%;
    width: 80%;
    height: 10%;
}
.search {
    display: flex;
    justify-content: center;
}

.search_input {
    width: 60%;
}
</style>