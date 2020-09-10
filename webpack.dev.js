const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
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

    }
});
