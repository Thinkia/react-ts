const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 模式
    mode: 'development',

    // 入口
    entry: './src/index.tsx',

    // 输出
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    devtool: "source-map",

    // 支持格式
    resolve: {
        extensions: [".ts", ".tsx",'.js']
    },

    // 热更新
    devServer: {
        port: 1001,
        hot: true
      },
      plugins:[
        new htmlWebpackPlugin({
               template:'./index.html',
        })
    ],

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};