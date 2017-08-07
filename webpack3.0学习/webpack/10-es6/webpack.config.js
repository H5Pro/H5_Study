var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
       app: path.resolve(__dirname, 'src/entry.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,//排除这个文件夹，不使用loader解析;
                use: [
                    {
                        loader: "babel-loader",
                        options:{
                            presets: ['es2015']
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new htmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}