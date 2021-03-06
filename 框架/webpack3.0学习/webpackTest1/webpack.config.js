/**
 * Created by fjl on 2017/6/29.
 */
module.exports = {
    devtool:'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:__dirname + '/app/index.js',//已多次提及的唯一入口文件
    output:{
        path:__dirname + '/public',//打包后的文件存放的地方
        filename:'bundle.js'//打包后输出文件的文件名
    },
    module:{//在配置文件里添加JSON loader
        rules: [
            {
                test: /\.json$/,
                use: "json-loader"
            }
        ]

    }
}
