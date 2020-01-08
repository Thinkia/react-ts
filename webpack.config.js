const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',

    entry: './src/index.tsx',

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx",'.js']
    },

    devServer: {
        contentBase: './dist',
        hot: true
      },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: '模块热替换'
      }),
      new webpack.HotModuleReplacementPlugin()
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