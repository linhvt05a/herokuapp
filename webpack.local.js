const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'none',
    devtool: 'innline-source-map',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: '/build',
        writeToDisk: true,
        port: 3001,
        hot: true,

    }
});
