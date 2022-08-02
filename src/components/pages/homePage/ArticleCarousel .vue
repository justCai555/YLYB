<template>
    <el-carousel height="300px">
      <el-carousel-item v-for="item in 4" :key="item" style="background-color: white;">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>