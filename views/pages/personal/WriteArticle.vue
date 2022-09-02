<template>
    <el-link type="primary" :underline="false" @click="writeArticleVisible = true">写文章</el-link>

    <el-drawer ref="articleDrawer" title="写文章" v-model="writeArticleVisible" direction="rtl" size="100%" modal
        :destroy-on-close="true" :show-close="true" :wrapperClosable="true" close-on-press-escape="false">

        <template #header="{}">
            <span>
                <h2>编写文章</h2>
            </span>
            <el-button text type="primary" plain @click="publishVisible = true">发布</el-button>

            <el-button text type="primary" plain @click="saveDraftsVisible = true">保存草稿</el-button>


        </template>
        <div id="editor">
            <!-- <WangEditor></WangEditor> -->
            <TiptapEditor ref="editor"></TiptapEditor>
        </div>

    </el-drawer>

    <el-dialog ref="publishDialog" title="确认发布" v-model="publishVisible" width="30%">
        <span>
            <el-form :model="publishForm" label-width="80px" :inline="false" size="normal">
                <el-form-item label="文章标题">
                    <el-input v-model="publishForm.articleName" maxlength="25" show-word-limit></el-input>
                </el-form-item>
            </el-form>

        </span>
        <template #footer>
            <span>
                <el-button @click="publishVisible = false">取消</el-button>
                <el-button type="primary" @click="publish">确认</el-button>
            </span>
        </template>
    </el-dialog>

    <el-dialog ref="draftDialog" title="保存草稿" v-model="saveDraftsVisible" width="30%">
        <span>
            <el-form :model="draftsForm" label-width="80px" :inline="false" size="normal">
                <el-form-item label="草稿标题">
                    <el-input v-model="draftsForm.articleName" maxlength="25" show-word-limit></el-input>
                </el-form-item>
            </el-form>

        </span>
        <template #footer>
            <span>
                <el-button @click="saveDraftsVisible = false">取消</el-button>
                <el-button type="primary" @click="saveDrafts">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
// import WangEditor from '../editor/WangEditor.vue'
import TiptapEditor from '../../../src/components/editor/TiptapEditor.vue'
import axios from 'axios'


const writeArticleVisible = ref(false)
const publishVisible = ref(false)
const saveDraftsVisible = ref(false)

const editor = ref(null)
const draftDialog = ref(null)
const publishDialog = ref(null)
const articleDrawer = ref(null)

const publishForm = reactive({
    articleName: ''
})
const draftsForm = reactive({
    articleName: ''
})

const publish = () => {
    let token = sessionStorage.getItem("token")
    let uid = sessionStorage.getItem("uid")
    // console.log(publishForm.articleName)
    axios.post('http://localhost:8080/api/article/publish', {
        articleName: publishForm.articleName,
        createTime: new Date(),
        articleJson: editor.value.getCurJson(),
        articleHtml: editor.value.getCurHtml(),
        token: token
    }).then((ret) => {
        publishDialog.value.visible = false
        // console.log(ret)
        if (ret.data) {

            ElMessage({
                message: '恭喜，您的文章已发布成功，待审核后即可被其他读者阅读。',
                type: 'success',
            })
            articleDrawer.value.visible = false
        } else {
            ElMessage({
                message: '很抱歉，发布失败',
                type: 'success',
            })
        }
    })
}

const saveDrafts = () => {
    let token = sessionStorage.getItem("token")
    let uid = sessionStorage.getItem("uid")
    // console.log(typeof(editor.value.getCurJson()))
    axios.post('http://localhost:8080/api/drafts/saveDraft', {
        articleName: draftsForm.articleName,
        uid:uid,
        articleJson: editor.value.getCurJson(),
        articleHtml: editor.value.getCurHtml(),
        token: token
    }).then((ret) => {
        if (ret.data.success) {
            ElMessage({
                message: '文章已保存为草稿， 可在草稿箱中查看。',
                type: 'success',
            })
            draftDialog.value.visible = false
            console.log(draftDialog.value.visible)
        }else{
            ElMessage({
                message: '草稿保存失败，请重试。',
                type: 'error',
            })
        }
    }).catch((error)=>{
        console.log("请求失败")
        ElMessage({
                message: '草稿保存失败，请重试。',
                type: 'error',
            })
        console.log(error)
    })

    draftDialog.value.visible = false
}


</script>

<style>
#editor {
    margin: auto;
    width: 80%;
    height: 80%;
}

.el-drawer.rtl {
    background: #3f4446;
}

.el-drawer__header {
    color: #ffffff;
}
</style>