module.exports = {
  runtimeCompiler: true,
  publicPath: "./",
  devServer: {
    before(app) {
      app.get("/api/application", (req, res) => {
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
