var path = require('path');
var htmlPlugin=require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname,'src/entry.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(["css-loader"])
            }
        ]
    },

    plugins: [
        new htmlPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'index.html'),
            inject:'head'
        }),
        new ExtractTextPlugin('output.css')
    ]
}