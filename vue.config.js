module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: "./",
  devServer: {
    before(app) {
      app.get("/api/address/friendList", (req, res) => {
        res.json(require("./mock/address/friendList.json"));
      });
      app.get("/api/application:id", (req, res) => {
        res.json(require("./mock/application.json"));
      });
      app.get("/api/information", (req, res) => {
        res.json(require("./mock/information.json"));
      });
      app.get("/api/message", (req, res) => {
        res.json(require("./mock/message.json"));
      });
      app.get("/api/record", (req, res) => {
        res.json(require("./mock/record.json"));
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
    }
  }
};