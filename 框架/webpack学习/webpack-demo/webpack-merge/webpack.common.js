/**
 * Created by fjl on 2019/7/25
 */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.ts'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production'
		})
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, 'dist')
	}
};
