<template>
    <el-link type="primary" :underline="false" @click="draftsVisible = true">草稿箱</el-link>

    <el-drawer title="草稿箱" @open="getDraft" open v-model="draftsVisible" direction="rtl" size="30%"
     :destroy-on-close="true" :show-close="true" :wrapperClosable="true">
        <div v-if="draftData!=null">
            
        </div>
        <div v-else>
            <el-empty description="草稿箱为空" />
        </div>
    </el-drawer>
    
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
    const draftsVisible = ref(false)
    const draftData = ref(null)
    

    const getDraft=() =>{
        axios.get('http://localhost:8080/api/user/getDraft', {id:12}).then(
            (ret)=>{
                console.log(ret.data)
            })
    }

    export default{
        data(){
            return{
                draftsVisible:draftsVisible
            }
            
        },
        methods:{
            getDraft
        }
    }

    

    
</script>