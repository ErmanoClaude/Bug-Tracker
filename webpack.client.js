const path = require("path");
const webConfig = require("./webConfig.json");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: "node",
  entry: [
    "./src/client/client.js",
    "./src/assets/scss/pages/homePage.scss",
    "./src/assets/scss/pages/loginPage.scss",
    "./src/assets/scss/globalStyles.scss",
    "./src/assets/scss/bootstrap.scss",
    "./src/helpers/browserconfig.xml"
  ],
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules",
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                target: {
                  browsers: ["last 2 versions"]
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].min.css", outputPath: "assets/css" }
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test:/\.xml$/,
        use:[
          {
            loader: 'xml-loader'
          }
        ]
      }
    ]
  },
  plugins:[
    new CopyWebpackPlugin([
      { from:'./src/helpers/browserconfig.xml', to:'assets/'}
    ])
  ]
};
