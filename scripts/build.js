process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

var webpack = require("webpack"),
  config = require("../webpack.config");

delete config.chromeExtension;

config.mode = "production";

webpack(config, function (err) {
  if (err) throw err;
});
