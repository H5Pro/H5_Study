/**
 * Created by fjl on 2019/7/29
 */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: "[name].[contenthash].js",
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
			title: 'Caching(缓存)',
		}),
	]
};
