const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'none',
    devtool: 'innline-source-map',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        proxy: {
            '/': 'http://localhost:5000'
        },
        writeToDisk: true,
        port: 3001,
        hot: true,

    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./public/images", to: "./images" },
                { from: "./public/font-page", to: "./font-page" },
            ],
        }),
        
    ],
});
