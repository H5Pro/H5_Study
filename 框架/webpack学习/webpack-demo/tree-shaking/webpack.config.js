/**
 * Created by fjl on 2019/7/25
 */
const path = require('path');
module.exports = {
	// mode: 'development',
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/",
	},
	devtool: '',
	devServer: {},
	// optimization: {
	// 	usedExports: true
	// },
	module: {
		rules: [
		]
	},
	plugins: [
	]
};
