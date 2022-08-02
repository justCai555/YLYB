<script>
import Home from "./components/pages/Home.vue";
import Personal from './components/pages/Personal.vue'
import Header from './components/header/Header.vue'
import Footer from "./components/footer/Footer.vue";
export default{
    components:{
    Home,
    Personal,
    Header,
    Footer
}
}
</script>


<template>
    <Header></Header>

    <el-tabs tab-position="left" class="nav-tabs">
        <el-tab-pane label="主页" class="nav-tab-pane"><Home></Home></el-tab-pane>
        <el-tab-pane label="发现" class="nav-tab-pane">Config</el-tab-pane>
        <el-tab-pane label="测试" class="nav-tab-pane">Role</el-tab-pane>
        <el-tab-pane label="个人空间" class="nav-tab-pane"><Personal></Personal></el-tab-pane>
    </el-tabs>
    <Footer></Footer>
</template>

<style>
    .nav-tabs{
        height: 84%;
        width: 99.5%;
        --el-tabs-header-height:60px;
    }
    .nav-tab-pane{
        color: aliceblue;
        font-weight: bolder;
    }
    .el-tabs__item{
        color: aliceblue;
        font-size: larger;
        font-weight: bolder;
    }
    .el-tabs_header, .el-tabs_nav-wrap{
        height: 100%;
    }
    .el-tabs__content{
        height: 100%;
    }
    .el-tab-pane{
        height: 100%;
    }
</style>