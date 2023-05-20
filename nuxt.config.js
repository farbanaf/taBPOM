import {resolve} from "path";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BPOM - Badan Pengawas Obat dan Makanan RI',
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Badan Pengawas Obat dan Makanan RI.' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:title', name: 'og:title', content: 'BPOM - Badan Pengawas Obat dan Makanan RI' },
      { hid: 'og:description', name: 'og:description', content: 'Badan Pengawas Obat dan Makanan RI.' },
      { hid: 'og:image', name: 'og:image', content: '/thumbnail-img.jpg?v=2' },
      { hid: 'og:url', name: 'og:url', content: process.env.NUXT_ENV_BASE_URL },
      { hid: 'og:site_name', name: 'og:site_name', content: 'BPOM' },

      { hid: 'twitter:title', name: 'twitter:title', content: 'BPOM - Badan Pengawas Obat dan Makanan RI' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Badan Pengawas Obat dan Makanan RI.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/thumbnail-img.jpg?v=2' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@BPOM' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
    ],
    script: [
      {
        src: 'https://accounts.google.com/gsi/client',
        async: true,
        defer: true,
      },
    ],
  },

  alias: {
    '~': resolve(__dirname, './'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-slick-carousel.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
