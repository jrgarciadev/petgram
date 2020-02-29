/* eslint-disable no-undef */
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest")
const WorkboxWebpackPlugin = require("workbox-webpack-plugin")
const path = require("path")

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu App de fotos de mascotas",
      shortname: "Petgram 🐶",
      description:
        "Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente",
      background_color: "#fff",
      theme_color: "#ea4d86",
      icons: [
        {
          src: path.resolve("assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    // Allows generate a service worker
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://(res.cloudinary.com|images.unsplash.com)"),
          handler: "CacheFirst", // Always first fetch from cache
          options: {
            cacheName: "images"
          }
        },
        {
          urlPattern: new RegExp("https://petgram-api-btg7zphh1.now.sh"),
          handler: "NetworkFirst", // Always first fetch from network
          options: {
            cacheName: "api"
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
}
