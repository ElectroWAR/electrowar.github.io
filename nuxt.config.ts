// https://nuxt.com/docs/api/configuration/nuxt-config


// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/scss/main.scss'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

