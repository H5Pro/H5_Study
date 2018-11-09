var path = require('path');
var webpack = require('webpack');
var htmlPlugin=require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,'src/entry.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery',
            'window.$':'jquery',
        }),
        new htmlPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'index.html'),
        })
    ]
}