import { createRouter, createWebHashHistory } from 'vue-router'


import Layout from '../views/layout/Layout.vue'
import Home from "../views/Home.vue";
import Personal from '../views/Personal.vue'
import HomeArticleCategory from '../views/home/HomeArticleCategory.vue'
import Article from '../views/Article.vue'
import NFT from '../views/NFT.vue'
import TransactionCenter from '../views/nft/TransactionCenter.vue'
import PersonalCenter from '../views/nft/PersonalCenter.vue'


const routes = [
    {
        path: '/', name: 'layout', component: Layout, redirect:'/home',children: [
            { path: '/article', component: Article },
            { path: '/home', component: Home , children:[
                {path: '/article_category', component:HomeArticleCategory}
            ]},
            { path: '/personal', component: Personal },
            { path: '/article', component: Article},
            { path: '/NFT', component: NFT, children:[
                { path: '/personal_center', component: PersonalCenter},
                { path: '/transaction_center', component: TransactionCenter}
            ]},
        ]
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router