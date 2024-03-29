// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@ant-design-vue/nuxt'],
  devtools: { enabled: true },
  devServer: {
    port: 3333,
  },
  build: {
    transpile: [/echarts/]
  },
  css: ['/assets/css/index.css', '/assets/css/common.less'],
})
