<template>
    <div class="avatar_box">
        <img src="../../../assets/avatar.jpeg" alt="" srcset="">
    </div>
    <div id="r_rside">
        <el-row :gutter="20">
            <el-col :span="12" :offset="0">
                粉丝：
            </el-col>
            <el-col :span="12" :offset="0">
                我的关注
            </el-col>
        </el-row>
        

    </div>
</template>

<script>
export default {
    data (){
        return{
            
        }
    }
}
</script>

<style>
.avatar_box {
    width: 30%;
    height: 100%;
    align-items: center;
    text-align: center;

}

.avatar_box img {
    width: 100%;
    border-radius: 25px;
}

#r_rside {
    width: 70%;
    height: 100%;
    background-color: rgb(51, 50, 49, 0.2);
}
</style>