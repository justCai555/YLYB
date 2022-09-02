<template>
    <div id="home">
        <el-container>
            <el-aside class="home_aside" width="20%">
                <div><span>--- 每日精选 ---</span></div>
            </el-aside>

            <el-main>
                <!-- 走马灯 -->
                <el-carousel height="300px">
                    <el-carousel-item class="home_carousel" v-for="item in 4" :key="item">
                        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>

                <el-menu :router="true" class="category_menu" mode="horizontal" default-active="" @select="">
                    <el-menu-item index="/article_category" >全部</el-menu-item>
                    <el-menu-item index="2" >数据库</el-menu-item>
                    <el-menu-item index="3" >Java</el-menu-item>
                    <el-menu-item index="4" >Python</el-menu-item>
                    <el-menu-item index="5" >Linux</el-menu-item>
                    <el-menu-item index="6" >Docker</el-menu-item>
                    <el-menu-item index="7" >云服务</el-menu-item>
                </el-menu>

                <router-view></router-view>

            </el-main>
        </el-container>


    </div>
</template>

<script setup>
import { ref } from 'vue'



</script>

<style scoped>
#home {
    height: 100%;
    width: 100%;
}
.home_aside{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.el-aside {
    background-color: aliceblue;
}

.el-main {
    /* background-color: aqua; */
}

.el-carousel {
    width: 80%;
    margin: auto;
}

.home_carousel {
    background-color: #D8E6E7;
}
.category_menu{
    width: 60%;
    margin: auto;
    margin-top: 15px;
    background-color: #77AAAD;
    opacity: 0.6;
    font-weight: bolder;
    border-radius: 15px;
    justify-content: space-between;
}
</style>