
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"},
      { rel: "stylesheet", type: "text/css", href: "https://adminlte.io/themes/AdminLTE/dist/css/AdminLTE.min.css" },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: "stylesheet", type: "text/css", href: "https://adminlte.io/themes/AdminLTE/dist/css/skins/_all-skins.min.css" }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js'},
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'},
      { src: 'https://adminlte.io/themes/AdminLTE/dist/js/adminlte.min.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
