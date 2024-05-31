import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { ssr: false },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error - vite-plugin-vuetify is not typed
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    "@nuxtjs/i18n",
    "@nuxt/test-utils/module",
    "@nuxt/test-utils",
    '@nuxt/eslint'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})



