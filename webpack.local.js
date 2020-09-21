const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');
var env = require("./env/env");
var path = require('path');

// var domain = env.MODE_ENV.local.host + ':' + (env.MODE_ENV.local.port ? env.MODE_ENV.local.port : 0000)

module.exports = merge(common, {
    mode: 'none',
    devtool: 'innline-source-map',
    // entry: [
    //     'webpack-dev-server/client?http://' + domain + '',
    //     'webpack/hot/only-dev-server',
    // ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        writeToDisk: true,
        proxy: { '/': 'http://localhost:5000' },
        port: env.MODE_ENV.local.port,
        hot: env.MODE_ENV.local.hot,
        host: env.MODE_ENV.local.host,
        liveReload: env.MODE_ENV.local.liveReload,
        historyApiFallback: true,
        sockHost: env.MODE_ENV.sockHost,
        sockPort: env.MODE_ENV.sockPort,
    }
});
