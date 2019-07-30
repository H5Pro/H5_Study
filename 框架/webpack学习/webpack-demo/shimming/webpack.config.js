/**
 * Created by fjl on 2019/7/29
 */

const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	mode: 'production',
	entry: {
		polyfills: './polyfills.js',
		index: './src/index.js'
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, 'dist'),
		publicPath: "./",
	},
	module: {
		rules: [
			{
				test: require.resolve('./src/index.js'),
				use: 'imports-loader?this=>undefined'
			},
			{
				test: require.resolve('./src/globals.js'),
				use: 'exports-loader?file,parse=helpers.parse'
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ["transform-strict-mode"]
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Shimming(预置依赖)',
		}),
		new webpack.ProvidePlugin({
			join: ['lodash', 'join'],
			partition: ["lodash", "partition"],
			fill: ["lodash", "fill"],
		})
	]
};
