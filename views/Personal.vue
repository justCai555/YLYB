<template>
    <div id="personal">

        <div id="left_block">
            <div id="main_content_nav">
                <el-row :gutter="10" justify="space-evenly" algin="middle" style="height: 100%;">
                    <el-col :span="4">
                        <!-- 写文章 -->
                        <WriteArticle></WriteArticle>
                    </el-col>
                    <el-col :span="4">
                        <!-- 我的草稿 -->
                        <Drafts></Drafts>
                    </el-col>
                    <el-col :span="4">
                        <!-- 系统通知 -->
                        <el-link type="primary" :underline="false">通知</el-link>
                    </el-col>
                    <el-col :span="4">
                        <!-- 认证 -->
                        <el-link type="primary" :underline="false">认证</el-link>
                    </el-col>

                    <el-col :span="8">
                        <!-- 搜索 -->
                        <div id="search">
                            <el-input v-model="search" placeholder="" size="normal" clearable @change=""></el-input>
                            <el-button type="primary" plain size="default" @click="">搜索</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div id="main_content">
                <MainContent></MainContent>
            </div>
        </div>
        <div id="right_block">
            <div id="r_top">
                <RightHeader></RightHeader>
            </div>
            <div id="r_content">

            </div>
        </div>
    </div>
</template>

<script setup>
import WriteArticle from './pages/personal/WriteArticle.vue';
import RightHeader from './pages/personal/RightHeader.vue';
import Drafts from './pages/personal/Drafts.vue';
import MainContent from './pages/personal/MainContent.vue';






</script>

<style>
#personal {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

#left_block {
    width: 70%;
    height: 100%;
}

#right_block {
    width: 30%;
    height: 100%;
}

#r_top {
    height: 20%;
    width: 100%;
    display: flex;
    /* background-color: rgb(33, 29, 29); */
}

#main_content_nav {
    width: 100%;
    height: 15%;
    /* background-color: rgba(53, 51, 51, 0.3); */
    color: beige;
}

#main_content {
    width: 100%;
    height: 85%;
    background-color: rgb(24, 22, 22, 0.1);
    text-align: center;
    
}

.el-col {
    height: 100%;
    align-items: center;
    text-align: center;
    padding-top: 2%;
    color: aliceblue;
    font-weight: bolder;
}

#search {
    display: flex;
}

#search .el-input {
    width: 50%;
    background-color: rgb(82, 81, 81, 0.5);
}
#r_content{
    /* background-color: rgb(56, 45, 45, 0.3); */
    width: 100%;
    height: 80%;
}
</style>