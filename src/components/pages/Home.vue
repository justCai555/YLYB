<template>
    <div id="home">
        <HomeNav></HomeNav>
        <!-- <ArticleCarousel></ArticleCarousel> -->
        <HomeMain></HomeMain>
    </div>
</template>

<script>
import ArticleCarousel from './homePage/ArticleCarousel .vue'
import HomeNav from './homePage/HomeNav.vue'
import HomeMain from './homePage/HomeMain.vue'
export default {
    data: () => {
    },
    components: { ArticleCarousel, HomeNav, HomeMain }
}

</script>

<style>
    #home{
        height: 100%;
        width: 100%;
    }
</style>