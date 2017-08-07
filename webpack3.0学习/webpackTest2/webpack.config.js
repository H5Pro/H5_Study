/**
 * Created by fjl on 2017/6/29.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: "inline-source-map",
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                use:[
                    'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    },

    plugins:[

        new webpack.BannerPlugin('Copyright fjl hxhz ly.'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
               warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            //hash:true,
        }),

    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }

};