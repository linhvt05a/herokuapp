const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge( common, {
    mode: 'production',
    output: {
        path: __dirname + '/build-prod',
        publicPath: '/',
        filename: 'bundle.js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                sourceMap: false,
                extractComments: 'all',
                // terserOptions: {
                //     compress: {
                //         pure_funcs: [
                //             'console.log',
                //             'console.info',
                //             'console.debug',
                //             'console.warn'
                //         ]
                //     }
                //  }
            })
        ],
    },
});
