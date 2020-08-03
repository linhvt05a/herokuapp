const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge( common, {
    mode: 'development',
    devtool: 'innline-source-map',
    devServer: {
        contentBase: './build',
        writeToDisk: true,
        port: 3000,
        proxy: {
            '/': 'http://localhost:5000'
        },
        hot: true
    }
});
