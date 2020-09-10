const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: __dirname + '/build-dev',
        publicPath: '/',
        filename: 'bundle.js'
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
