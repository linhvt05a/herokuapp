const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:  {
                        loader: 'css-loader',
                        options: {
                          modules: true,
                          sourceMap: true,
                          importLoaders: 2,
                          localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                    use: [
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                        sourceMap: true,
                        importLoaders: 2,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                      }
                    },
                    'sass-loader'
                    ]
                })
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
            }
        )
    ],
    devServer: {
        port: 3000,
        writeToDisk: true,
        proxy: {
            '/': 'http://localhost:5000'
        },
        contentBase: './build',
        hot: true
    }
};
