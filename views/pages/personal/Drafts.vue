<template>
    <el-link type="primary" :underline="false" @click="draftsVisible = true">草稿箱</el-link>

    <el-drawer title="草稿箱" @open="getDraft" open v-model="draftsVisible" direction="rtl" size="30%"
        :destroy-on-close="true" :show-close="true" :wrapperClosable="true">
        <div v-if="!draftData.isEmpty">
            <div v-for="draft, index in draftData.data">
                <!-- 卡片 -->
                <div class="card-main">
                    <el-row :gutter="20">
                        <el-col :span="13" :offset="0">标题：{{ draft.articleName }}</el-col>
                        <el-col :span="4" :offset="0">
                            <el-button type="text" color="#626aef" auto-insert-space @click="">编辑</el-button>
                        </el-col>
                        <el-col :span="4" :offset="1">
                            <el-button type="text" color="#CFD3DC" plain auto-insert-space @click="deleteDraft(draft.draftId, index)">删除
                            </el-button>
                        </el-col>
                    </el-row>

                    <el-timeline>
                        <el-timeline-item color="#2b1d1d" :timestamp="draft.createTime" placement="top" type="primary"
                            size="normal">
                            创建草稿时间
                        </el-timeline-item>
                        <el-timeline-item color="#2d481f" :timestamp="draft.createTime" placement="top" type="primary"
                            size="normal">
                            上次修改时间
                        </el-timeline-item>
                    </el-timeline>

                </div>

            </div>
        </div>
        <div v-else>
            <el-empty description="草稿箱为空" />
        </div>
    </el-drawer>

</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const draftsVisible = ref(false)
let draftData = {
    isEmpty: ref(true),
    data: null
}

const getDraft = () => {
    let uid = sessionStorage.getItem("uid")
    let token = sessionStorage.getItem("token")
    // console.log(token)
    axios.get('http://localhost:8080/api/drafts/userGetDrafts', {
        params: {
            token: token,
            uid: uid
        }
    }).then(
        (ret) => {
            if (ret.data.data != null) {
                draftData.data = ret.data.data
                // draftData.isEmpty.value = false
                draftData.isEmpty = false
                console.log(draftData.isEmpty)
            }
        })
}

const deleteDraft = (draftId, index) => {
    // console.log(draftId)
    draftData.data.splice(0,1)
    console.log(draftData.data)
    let token = sessionStorage.getItem("token")
    axios.delete('http://localhost:8080/api/drafts/deleteDraft', {
        params:{
            token: token,
            draftId: draftId
        }
    }).then((ret)=>{
        console.log(typeof(draftData.data))
        console.log('delete')
    })
}

</script>

<style>
.card-main {
    width: 95%;
    background-color: rgb(115, 119, 119, 0.5);
    /* padding: 1px; */
    margin: auto;
    margin-top: 2%;
}

.card-main el-row {
    width: 85%;
}
</style>