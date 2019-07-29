/**
 * Created by fjl on 2019/7/25
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}
})
