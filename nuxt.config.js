const pkg = require("./package");
// const axios = require("axios");
// let colorsData = JSON.parse(
//   require("fs").readFileSync("static/data/db.json", "utf8")
// );

// const api = axios.create({
//   baseURL: "http://localhost:3000/data"
// });
// api.get("db.json");

//or

// axios.get("/data/db.json");
module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },

  /*
  ** Global CSS
  */
  css: ["~/assets/css/tailwind.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // baseURL: "http://localhost:3000/data"
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  generate: {
    routes(callback) {
      const colors = require("./data/colors.json");
      let routes = colors.map(color => `/${color.name}`);
      callback(null, routes);
    }
  }
  // generate: {
  //   routes: function() {
  //     return colorsData.map(color => {
  //       return "/" + color.name;
  //     });
  //   }
  // }
};
