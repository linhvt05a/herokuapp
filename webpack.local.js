const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');
var env = require("./config/env");
var path = require('path');


module.exports = merge(common, {
    mode: 'none',
    devtool: 'inline-source-map',
    
    devServer: {
        contentBase: "./dist",
        writeToDisk: true,
        proxy: { '/': 'http://localhost:5000' },
        port: env.MODE_ENV.port,
        host: env.MODE_ENV.host,
        inline: true,
        hot: true,
        historyApiFallback: true,
    }
});
