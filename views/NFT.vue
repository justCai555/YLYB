<template>
    <div class="nft_page">
        NFT page
        <el-menu class="nft_nav" :router="true" mode="horizontal">
            <el-menu-item index="/transaction_center">
                <el-icon><Shop /></el-icon>
                <span>交易中心</span>
            </el-menu-item>
            <el-menu-item index="/personal_center">
                <el-icon><Avatar /></el-icon>
                <span>个人中心</span>
            </el-menu-item>

        </el-menu>
        <router-view></router-view>
    </div>

</template>

<script setup>

</script>


<style>
.nft_page{
    height: 100%;
    border-color: #548687;
    border-radius: 5px;
    border-style: solid;
}
.nft_nav {
    border-radius: 5px;
}
</style>
