const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf');


module.exports = merge(baseWebpackConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../build',
        host: 'localhost',
        compress: true,
        port: 3000
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
                    'sass-loader'
                ]
            },

        ]
    }
})
