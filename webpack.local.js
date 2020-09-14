const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');
var env = require("./config/env");
var path = require('path');

// Host
const host = process.env.host || 'localhost';

module.exports = merge(common, {
    mode: 'none',
    devtool: 'innline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        writeToDisk: true,
        proxy: { '/': 'http://localhost:5000' },
        port: env.MODE_ENV.port,
        hot: env.MODE_ENV.hot,
        liveReload: env.MODE_ENV.liveReload,
        // port: 3001,
        // hot: true,
    },
});
