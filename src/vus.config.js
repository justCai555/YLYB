const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    }
    // 解决跨域
    devServer:{
        proxy:{
            '/api':{
                target:'http:localhost:8080',
                changeOrigin:true,
                pathRewrite: { '^/api': 'heelo' },
            }
        }
    }
}
