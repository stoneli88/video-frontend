module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'asite',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // Add apollo module
  modules: ["@nuxtjs/apollo"],
  // Give apollo module options
  apollo: {
    // includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    // authenticationType: 'Basic', // optional, default: 'Bearer'
    // required
    clientConfigs: {
      default: {
        // required  
        httpEndpoint: 'http://localhost:4000',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        // wsEndpoint: 'http://localhost:4000', // optional
        // LocalStorage token
        // tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        // persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        // websocketsOnly: false // Optional
      }
      // alternative: user path to config which returns exact same config options
    }
  }

}
