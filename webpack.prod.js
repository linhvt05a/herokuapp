const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge( common, {
    mode: 'production',
    optimization: {
        'minimize': true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        pure_funcs: [
                            'console.log',
                            'console.info',
                            'console.debug',
                            'console.warn'
                        ]
                    }
                 }
            })
        ],
    },
});
