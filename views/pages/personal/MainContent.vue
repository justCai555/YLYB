<template>
    <template v-if="myArticles != null">
        <el-table class="articlesTable" height="80%" :data="myArticles" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <!-- <el-table-column type="index" width="50" /> -->
            <el-table-column prop="articleName" label="文章名" />
            <el-table-column prop="author" label="作者" />
            <el-table-column prop="context" label="内容" />
            <el-table-column label="操作">
                <template #default = "article">
                    <el-button type="text" size="default" @click="modifyArticle(article.row)">编辑</el-button>
                    <el-button type="text" size="default" @click="deleteArticle">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
    </template>
    <div v-else>
        <el-empty description="暂未发布文章" />
    </div>

    <el-drawer ref="modifyDrawer" title="编辑" v-model="modifyDrawerVisible" direction="rtl" size="100%"
        :destroy-on-close="true" :show-close="true" :wrapperClosable="true">
        jinitaimei
    </el-drawer>


</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const articleId = ref(0)

const modifyDrawer = ref(null)
const modifyDrawerVisible = ref(false)

const getArticle = () =>{

}

const modifyArticle = (article) => {
    console.log(article)
    modifyDrawer.value.visible = true

}

const deleteArticle = () => {

}




const myArticles = [{ articleName: "论佩洛西访台", author: "龟妹", context: "dajkwndawkdnlawnk" },
{ articleName: "蔡英文要下台了吗？", author: "龟连", context: "dawdwadwadwa" },
{ articleName: "蔡英文要下台了吗？", author: "龟连", context: "dawdwadwadwa" },
{ articleName: "蔡英文要下台了吗？", author: "龟连", context: "dawdwadwadwa" },
{ articleName: "蔡英文要下台了吗？", author: "龟连", context: "dawdwadwadwa" },
{ articleName: "蔡英文要下台了吗？", author: "龟连", context: "dawdwadwadwa" }
]



</script>

<style>
.articlesTable {
    width: 80%;
    margin: auto;
    background-color: rgb(33, 31, 31, 0.9);
}

.el-table {
    /* 表头背景色 */
    --el-table-header-bg-color: rgb(33, 31, 31, 0.85);

    /* 行背景色 */
    --el-table-tr-bg-color: rgb(33, 31, 31, 0.80);

    /* 行悬停色 */
    --el-table-row-hover-bg-color: rgb(58, 58, 58);

    /* 表格字体色 */
    --el-table-text-color: rgb(179, 233, 255);

    /* 表头字体色 */
    --el-table-header-text-color: #ffff;

    /* --el-table-current-row-bg-color:rgb(75, 78, 83); */

    /* --el-table-bg-color:#ffff; */

    /* --el-table-expanded-cell-bg-color:#ffff; */
}

.el-scrollbar {
    --el-scrollbar-opacity: 0.3;
    --el-scrollbar-bg-color: rgb(33, 31, 31, 0.80);
    --el-scrollbar-hover-opacity: 0.5;
    --el-scrollbar-hover-bg-color: rgb(33, 31, 31, 0.80);
}
</style>