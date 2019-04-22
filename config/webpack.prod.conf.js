const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf');

module.exports = merge(baseWebpackConf, {
    mode: 'production',
})
