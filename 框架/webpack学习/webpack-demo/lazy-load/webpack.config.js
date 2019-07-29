/**
 * Created by fjl on 2019/7/27
 */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: './src/index.js',
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
			title: 'lazy laod(懒加载)',
		}),
	]
};
