const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseWebpackConf, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new OptimizeCssAssetPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: {removeAll: true}},
            canPrint: true
        }),
        new MiniCssExtractPlugin({ filename: 'css/[name].[hash:5].css', chunkFilename: '[id].css' }),
    ]
})
