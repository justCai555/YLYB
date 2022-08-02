<template>
    <div id="footer">
        <p>YLYB-Blog</p>
        <el-row :gutter="0" algin="top" justify="center">
            <el-col v-for="technical in technicals" :span="4" :offset="0">
                <el-link type="" :underline="false" :href="technical.link" target="_blank">{{ technical.name }}
                </el-link>
            </el-col>

        </el-row>

    </div>
</template>

<script>
const technicals = [
    { name: "Vue3", link: "https://staging-cn.vuejs.org/" },
    { name: "Element Plus", link: "https://element-plus.gitee.io/zh-CN" },
    { name: "Axios", link: "https://www.axios-http.cn/" },
    { name: "webpack", link: "https://github.com/webpack/webpack" },
    { name: "Tiptap", link: "https://tiptap.dev/"},
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
    height: 6%;
    width: 100%;
    background-color: rgb(44, 25, 25, 0.5);
    color: rgb(128, 59, 59);
}

#footer p {
    font-weight: bolder;
    text-align: center;
    margin: 0;
}

.el-col {
    padding-top: 0;
}
</style>