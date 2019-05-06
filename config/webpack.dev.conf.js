const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf');


module.exports = merge(baseWebpackConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../build',
        host: 'localhost',
        port: 3000,
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
    performance: {
        hints: false
    },
    module: { 
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },

        ]
    }
})
