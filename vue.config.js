const path = require("path")
const webpack = require("webpack")

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: "./", //基本路径
  outputDir: "wechat-vue", //构建时的输出目录
  assetsDir: "static", //放置静态资源的目录
  indexPath: "index.html", //html的输出路径
  filenameHashing: true, //文件名哈希
  // 配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components/"))
      .set("_as", resolve("src/assets/img/"))
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: "localhost",
    port: 8080,
    compress: true,
    open: true, //true，则自动打开浏览器
    watchOptions: { //一组自定义的监听模式，用来监听文件是否被改动过
      aggregateTimeout: 300, //一旦第一个文件改变，在重建之前添加一个延迟。填以毫秒为单位的数字
      poll: 1000, //填以毫秒为单位的数字。每隔（你设定的）多少时间查一下有没有文件改动过。不想启用也可以填false
      ignored: /node_modules/, //观察许多文件系统会导致大量的CPU或内存使用量。可以排除一个巨大的文件夹
    },
    overlay: { //如果为 true ，在浏览器上全屏显示编译的errors或warnings
      errors: true,
      warnings: false
    },
    // proxy: { //当您有一个单独的API后端开发服务器，并且想要在同一个域上发送API请求时，则代理这些 url 。看例子好理解
    //   '/proxy': {
    //     target: 'http://your_api_server.com',
    //     changeOrigin: true,
    //     pathRewrite: { //重写路径。匹配 /proxy ，然后变为''
    //       '^/proxy': ''
    //     }
    //   },
    before(app) {
      app.get("/api/address/friendList", (req, res) => {
        res.json(require("./mock/address/friendList.json"));
      });
      app.get("/api/message/application:id", (req, res) => {
        res.json(require("./mock/message/application.json"));
      });
      app.get("/api/information", (req, res) => {
        res.json(require("./mock/information.json"));
      });
      app.get("/api/message/peopleList", (req, res) => {
        res.json(require("./mock/message/peopleList.json"));
      });
      app.get("/api/message/peopleDetail", (req, res) => {
        let result = require("./mock/message/peopleDetail.json")
        res.json(result);
      });
      app.get("/api/message/redBagReceiveRecord", (req, res) => { //红包领取记录
        res.json(require("./mock/message/redBagReceiveRecord.json"));
      });

      app.get("/api/me/selfinformation", (req, res) => {
        res.json(require("./mock/me/selfinformation.json"));
      });
      app.get("/api/me/information/setName", (req, res) => {
        res.json(require("./mock/me/setName.json"));
      });
      app.get("/api/me/information/QRcode", (req, res) => {
        res.json(require("./mock/me/QRcode.json"));
      });
      app.get("/api/me/information/more", (req, res) => {
        res.json(require("./mock/me/more.json"));
      });
      app.get("/api/me/information/address", (req, res) => {
        res.json(require("./mock/me/address.json"));
      });

      app.get("/api/me/carBag/cardBagList", (req, res) => {
        res.json(require("./mock/me/cardBagList.json"));
      });
      app.get("/api/me/album/weChatMomentAlbum", (req, res) => {
        res.json(require("./mock/me/weChatMomentAlbum.json"));
      });
      app.get("/api/me/emoji/recommendedExpression", (req, res) => {
        res.json(require("./mock/me/recommendedExpression.json"));
      });
      app.get("/api/me/emoji/moreExcitingExpression", (req, res) => {
        res.json(require("./mock/me/moreExcitingExpression.json"));
      });
      app.get("/api/me/pay/tencentPayService", (req, res) => {
        res.json(require("./mock/me/tencentPayService.json"));
      });
      app.get("/api/me/pay/thirdPartyPayService", (req, res) => {
        res.json(require("./mock/me/thirdPartyPayService.json"));
      });
    },
  },
};