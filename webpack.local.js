const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

var env = require("./config/env");
var path = require('path');

module.exports = merge(common, {
    mode: 'none',
    devtool: 'innline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        writeToDisk: true,
        proxy: { '/': 'http://localhost:5000' },
        port: env.MODE_ENV.port,
        hot: env.MODE_ENV.hot,
        host: env.MODE_ENV.host,
        liveReload:env.MODE_ENV.liveReload
        // port: 3001,
        // hot: true,
    }
});
