<template>
    <div class="box">
        <div class="nft_p_aside">
            <p>我的藏品</p>
        </div>
        <div class="nft_p_main">
            我的NFT
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
.box {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.nft_p_aside {
    height: 100%;
    width: 68%;
    background-color: burlywood;
    /* padding: 1% 1%; */
    margin-top: 1%;
}

.nft_p_main {
    height: 100%;
    width: 28%;
    padding: 1% 1%;
    margin-top: 1%;
    background-color: blueviolet;
}
</style>