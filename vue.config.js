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
    }
  }
};