<template>
    <el-page-header content="detail" @back="goBack" />
</template>

<script setup>
import { useRouter } from 'vue-router';


    const router = useRouter()


    const goBack = () => {
        router.back()
    }
</script>
    
<style>

</style>