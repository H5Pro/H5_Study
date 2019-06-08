/**
 * Created by fjl on 2019/6/4
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = env => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/main.ts',
    devtool: env.production ? '' : 'inline-source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      hot: true,
      port: 8000
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(ts)$/,
          exclude: /node_modules/,
          include: /src/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            // configFile: 'tslint.json', // 读取的tslint的配置文件，默认是根目录下的tslint.json
            failOnHint: env.production && env.development, // tslint错误是否会打断编译
            // fix: env.local // 是否自动修补错误
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          include: /src/,
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [{loader: "file-loader"}]
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json', '.vue']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      new VueLoaderPlugin() // vue相关，必须
    ]
  }
}
