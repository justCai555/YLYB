<template>
    <el-container>
        <el-header class="title_header">
            <!-- header -->
            <div id="header" class="flex-float">
                <h1>YLYB-Blog</h1>
                <div class="req">
                    <template v-if="!loginState">
                        <el-button text plain color="#218380" @click="dialogRegisterVisible = true">注册</el-button>
                        <el-button text plain color="#218380" @click="dialogLoginVisible = true">登录</el-button>
                    </template>
                    <template v-else>
                        <el-button text plain color="#20B2AA" @click="logout">注销</el-button>
                    </template>
                </div>
            </div>

            <el-dialog title="注册" ref="registerDialog" v-model="dialogRegisterVisible" width="30%"
                :before-close="handleClose">
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
                            <el-input type="textarea" :rows="2" v-model="form.profile" placeholder="" :maxlength="-1"
                                :show-word-limit="false" :autosize="{ minRows: 2, maxRows: 4 }">
                            </el-input>
                        </el-form-item>


                        <el-form-item>
                            <el-button type="primary" @click="register">确认信息并注册</el-button>
                            <el-button type="form.reset">重置</el-button>
                        </el-form-item>
                    </el-form>

                </span>
            </el-dialog>

            <el-dialog title="登录" ref="loginDialog" v-model="dialogLoginVisible" width="30%"
                :before-close="handleClose">
                <span>
                    <el-form :model="loginForm" ref="form" :rules="rules" label-width="80px" :inline="false"
                        size="normal">
                        <el-form-item label="用户名">
                            <el-input v-model="loginForm.username">用户名</el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input type="password" v-model="loginForm.password">密码</el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="login">Login</el-button>
                            <el-button @click="dialogLoginVisible = false">取消</el-button>
                        </el-form-item>
                    </el-form>

                </span>
            </el-dialog>

        </el-header>

        <!-- 真正内容 -->
        <el-container>
            <el-header>
                <!-- 导航 -->
                <el-menu mode="horizontal" ellipsis="false" :router="true">
                    <el-menu-item index="/home">主页</el-menu-item>
                    <el-menu-item index="/article">文章</el-menu-item>
                    <el-menu-item index="/NFT">NFT</el-menu-item>
                    <el-menu-item index="/personal">个人中心</el-menu-item>


                </el-menu>
            </el-header>
            <el-main>
                <!-- router-view 展示位置 -->
                <router-view></router-view>
            </el-main>
        </el-container>
        <Footer></Footer>
    </el-container>




</template>

<script setup>

import { ref, reactive, h, } from 'vue'
import { ElMessageBox } from 'element-plus'
import axios from 'axios'
import Footer from '../pages/Footer.vue'

const header = ref(null)
const isLogin = ref(false)
const loginStateChange = () => {
    console.log(header.value)
    isLogin.value = header.value.loginState
}

// const {proxy} = (getCurrentInstance() as ComponentInternalInstance)
const dialogRegisterVisible = ref(false)
const dialogLoginVisible = ref(false)

let loginState = ref(false)

const loginDialog = ref(null)
const registerDialog = ref(null)

const radio = ref(0)


const form = reactive({
    username: '',
    password: '',
    profile: '',
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
        if (ret.data.success) {
            console.log(ret.data)
            sessionStorage.setItem('uid', ret.data.data[0])
            sessionStorage.setItem('token', ret.data.data[1])
            loginState.value = true
            loginDialog.value.visible = false
            ElMessageBox({
                title: "notice",
                message: h('i', { style: 'color: teal' }, '登陆成功，请开始您愉快的浏览之旅吧~'),
            })
        }
    })
}


const register = () => {
    axios.post('http://localhost:8080/api/user/register', {
        username: form.username,
        password: form.password,
        profile: form.profile
    }).then((ret) => {
        if (ret.data.success) {
            ElMessageBox({
                title: "notice",
                message: h('i', { style: 'color: teal' }, "注册成功，请前往登录开始您的旅程~"),
            })
            registerDialog.value.visible = false
        } else {
            ElMessageBox({
                title: "notice",
                message: h('i', { style: 'color: teal' }, "注册失败，请重试!"),
            })
        }

    })
}

const logout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("uid")
    loginState.value = false
    console.log(loginState.value)
}
</script>

<style>
.el-container {
    height: 100vh;
    overflow: hidden;
}

.title_header {
    width: 100%;
    background-color: #77AAAD;
}

.req {
    padding: 1%;
}

.el-menu {
    margin-top: 10px;
}
</style>