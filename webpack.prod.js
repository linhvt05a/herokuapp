const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: __dirname + '/build-prod',
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./public/images", to: "./images" },
                { from: "./public/font-page", to: "./font-page" },
            ],
        }),
    ],
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
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
