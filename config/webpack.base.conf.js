const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].js'
    },
    module: { //loader
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
            { test: /\.(jpg|png|jpeg|svg|gif)$/, use: 'file-loader'},
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader'},
            
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ManifestPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html', favicon: './public/favicon.ico' })
    ]
}