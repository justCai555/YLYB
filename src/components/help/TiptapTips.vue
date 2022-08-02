<template>
    <el-button type="text" size="default" @click="tipsVisible = true">Tips</el-button>
    
    <el-drawer title="Tiptap Editor Tips" v-model="tipsVisible" direction="rtl" size="40%"
    :destroy-on-close="true" :show-close="true" :wrapperClosable="true">
        <h2 style="width:100%;text-align: left;">快捷键：</h2>
        <p>代码:  Ctrl+E</p>
        <p>键入代码块：键入``` /~~~ (3个反引号+空格或者3个波浪号+空格)，即生成代码块</p>
        <p>切换代码块： Ctrl+Alt+C</p>
        <p>标题级别1~6:  Ctrl+Alt+1/2/3/4/5/6</p>
        <p>文本对齐：左 Ctrl+Shift+L, 右 Ctrl+Shift+R, 中 Ctrl+Shift+E, 对齐 Ctrl+Shift+J</p>
    </el-drawer>
    
</template>

<script>
    import {ref} from 'vue'

    const tipsVisible = ref(false)


    export default{
        data(){
            return {
                tipsVisible:tipsVisible
            }
        }

    }
</script>