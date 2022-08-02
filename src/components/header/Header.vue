<template>
    <div id="header">
        <h1>YLYB-Blog</h1>
        <div id="req">
            <el-button text plain color="#20B2AA" @click="dialogRegisterVisible = true">注册</el-button>
            <el-button text plain color="#20B2AA" @click="dialogLoginVisible = true">登录</el-button>
        </div>
    </div>

    <el-dialog title="注册" v-model="dialogRegisterVisible" width="30%" :before-close="handleClose">
        <span>
            <!-- 表单 -->
            <el-form :model="form" label-width="120px" label-position="top" scroll-to-error status-icon>
                <el-form-item label="用户名">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码" show-password>
                    <el-input v-model="form.password" type="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" size="normal">
                    <el-radio-group v-model="radio">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="个人简介" size="normal">
                    <el-input type="textarea" :rows="2" v-model="form.desc" placeholder="" :maxlength="-1"
                        :show-word-limit="false" :autosize="{ minRows: 2, maxRows: 4 }">
                    </el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="register">确认信息并注册</el-button>
                    <el-button type="reset">重置</el-button>
                </el-form-item>
            </el-form>

        </span>
    </el-dialog>

    <el-dialog title="登录" v-model="dialogLoginVisible" width="30%" :before-close="handleClose">
        <span>
            <el-form :model="loginForm" ref="form" :rules="rules" label-width="80px" :inline="false" size="normal">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.username">用户名</el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginForm.username">密码</el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">Login</el-button>
                    <el-button @click="dialogLoginVisible = false">取消</el-button>
                </el-form-item>
            </el-form>

        </span>
    </el-dialog>
</template>


<script lang="ts">
import { ref, reactive, h, getCurrentInstance, ComponentInternalInstance,} from 'vue'
import { ElMessageBox, ElNotification  } from 'element-plus'
import axios from 'axios'
import { fromJSON } from 'postcss'


// const {proxy} = (getCurrentInstance() as ComponentInternalInstance)
let dialogRegisterVisible = ref(false)
let dialogLoginVisible = ref(false)
const radio = ref(0)


const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

const form = reactive({
    username: '',
    password: '',
    desc: '',
})
const loginForm = reactive({
    username: '',
    password: ''
})

const login = () => {
    axios.post('http://localhost:8080/api/user/login', {
        username: loginForm.username,
        password: loginForm.password
    }).then((ret) => {
        if(ret.data.success){
            // dialogLoginVisible=false
            ElMessageBox({
                title:"notice",
                message: h('i', { style: 'color: teal' }, 'This is a reminder'),
            })
        }
    })
}


const register = () => {
    axios.post('http://localhost:8080/api/user/test', {
        username: form.username,
        password: form.password
    }).then((ret) => {
        
        ElMessageBox({
                title:"notice",
                message: h('i', { style: 'color: teal' }, ret.data),
            })
    })
}

export default {
    data() {
        return {
            dialogRegisterVisible: dialogRegisterVisible,
            dialogLoginVisible: dialogLoginVisible,
            form: form,
            radio: radio,
            loginForm: loginForm,
        };
    },
    methods: {
        register,
        login,
    }

}
</script>

<style>
#header {
    text-align: center;
    align-items: center;
    font-size: larger;
    height: 10%;
    width: 100%;
    display: flex;
}

#req {
    width: 10%;
    display: flex;
    justify-content: space-around;
}

#header h1 {
    color: antiquewhite;
    align-items: center;
    width: 92%;
}
</style>