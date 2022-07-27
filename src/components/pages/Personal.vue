<template>
    <div id="personal">

        <div id="left_block">

        </div>
        <div id="right_block">
            <div id="r_top">
                <div class="avatar_box">
                    <el-avatar shape="square" fit="cover" src="./avatar.jpeg"/>
                </div>
                <div id="r_rside">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                text: 'This is personal page.',
            };
        },
    }
</script>

<style>
    #personal{
        display: flex;
        justify-content: space-between;
        background-color: rgb(52, 53, 53, 0.15);
        width: 100%;
        height: 100%;
    }

    #left_block{
        width: 60%;
        height: 100%;
        background-color: rgb(80, 121, 156);
    }

    #right_block{
        width: 40%;
        height: 100%;
        background-color: cadetblue;
    }
    #r_top{
        background-color: darkgray;
        height: 20%;
        width: 100%;
        display: flex;
    }

    .avatar_box{
        width: 30%;
        height: 100%;
        background-color: black;
    }
    #r_rside{
        width: 70%;
        height: 100%;
        background-color: wheat;
    }
</style>