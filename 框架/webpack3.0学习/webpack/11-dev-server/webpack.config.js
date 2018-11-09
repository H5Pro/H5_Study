var htmlPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: {
        app: path.resolve(__dirname,'src/entry.js')
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "[name].js"
    },
    plugins: [
        new htmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    devServer: {
        port: '4000',
        contentBase: path.resolve(__dirname,'build'),
        inline: true
    }
}
