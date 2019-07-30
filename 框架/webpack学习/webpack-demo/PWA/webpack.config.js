/**
 * Created by fjl on 2019/7/30
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist'),
		publicPath: "./"
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'PWA(渐进式网络应用程序)',
		}),
		new WorkboxPlugin.GenerateSW({
			// 这些选项帮助快速启用 ServiceWorkers
			// 不允许遗留任何“旧的” ServiceWorkers
			clientsClaim: true,
			skipWaiting: true
		})
	]
}
