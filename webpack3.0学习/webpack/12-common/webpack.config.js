var webpack = require('webpack')
var path = require('path');
module.exports = {
    entry: {
        page1: path.resolve(__dirname, 'src/page1.js'),
        page2: path.resolve(__dirname, 'src/page2.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    plugins: [
        new
        new webpack.optimzie.CommonsChunkPlugin({

        })
    ]
}