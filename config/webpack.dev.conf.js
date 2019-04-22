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
    }
})
