module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.31.108:81",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
