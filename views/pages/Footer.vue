<template>
    <div id="footer">
        <p>YLYB-Blog</p>
        <div class="link_box">
            <el-link v-for="technical in technicals" type="" :underline="false" :href="technical.link" target="_blank">
                {{ technical.name }}
            </el-link>
        </div>
    </div>
</template>

<script>
const technicals = [
    { name: "Vue3", link: "https://staging-cn.vuejs.org/" },
    { name: "Element Plus", link: "https://element-plus.gitee.io/zh-CN" },
    { name: "Axios", link: "https://www.axios-http.cn/" },
    { name: "webpack", link: "https://github.com/webpack/webpack" },
    { name: "Tiptap", link: "https://tiptap.dev/" },
]


export default {
    data() {
        return {
            technicals: technicals,
        }
    }
}
</script>

<style>
#footer {
    height: 10%;
    width: 100%;
    background-color: #6E7783;
    color: rgb(128, 59, 59);
}

#footer p {
    font-weight: bolder;
    text-align: center;
    margin: 0;
}

.el-link {
    color: #77AAAD;
}

.el-col {
    padding-top: 0;
}

.link_box{
    display: flex;
    justify-content: space-around;

}
</style>