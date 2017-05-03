const { resolve } = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './src/js/index.js',
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['latest', {
                            'es2015': {
                                'modules': false
                            }
                        }],
                        'react'
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [{
                loader: "style-loader"
                }, {
                    loader: 'css-loader', options: {
                        importLoaders: 1,
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [
                                require('autoprefixer')({
                                    browsers: ['last 2 versions', 'ie 9', 'Firefox ESR']
                                })
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new DashboardPlugin(),
        new WebpackBrowserPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        port: 8000,
        publicPath: '/'
    }
}