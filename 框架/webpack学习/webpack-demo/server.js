/**
 * Created by fjl on 2019/6/4
 */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告诉 express 使用 webpack-dev-middlewaref,
// 以及将 webpack.config.js 配置文件作为配置基础

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// 将文件 serve 到 port 3000.

app.listen(3000, function () {
  console.log('Example  app listening on port 3000!\n');
})
