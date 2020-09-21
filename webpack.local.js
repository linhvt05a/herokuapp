const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');
var env = require("./env/env");
var path = require('path');


module.exports = merge(common, {
    mode: 'none',
    devtool: 'inline-source-map',
    
    devServer: {
        contentBase: "./build",
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
