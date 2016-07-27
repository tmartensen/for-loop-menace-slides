/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");
var favicon = require("serve-favicon");
var staticFiles = require('serve-static');

var app = express();
var compiler = webpack(config);

var serverPort = process.env.PORT || 1337;

app.use(favicon(__dirname + '/assets/favicon.ico'));

app.use(staticFiles('assets', {
        dotfile: 'ignore',
        etag: true,
        index: false,
        lastModified: true
    }));

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(serverPort, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
