/**
 * Created by fjl on 2019/7/29
 */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
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
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: "all"
				}
			}
		},
		runtimeChunk: 'single'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Caching(缓存)',
		}),
		new webpack.HashedModuleIdsPlugin()
	]
};
