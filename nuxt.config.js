module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '人生苦短，我用JavaScript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'favicon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', '~/assets/css/icon.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', '~/plugins/vue-notifications'],
    loaders: [
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~plugins/filters',
    { src: '~/plugins/vue-notifications', ssr: false }
  ]
}
