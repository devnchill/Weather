const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 6969,
    open: {
      app: {
        name: "google-chrome-stable",
      },
    },
    static: "./dist/",
    watchFiles: "./src/**/template.html",
  },
});
