/**
 * Created by fjl on 2019/7/27
 */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		another: './src/another-module.js',
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, 'dist'),
		publicPath: "./",
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'code splitting(代码分离)',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			filename: 'another.html',
			title: 'code splitting - 另一个模块',
			chunks: ['another']
		}),
	]
};
