const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: ['@babel/polyfill', './index.js']
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './pages/colors-type/colors-type.pug',
            filename: './pages/colors-type.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader?pretty=true'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /(?<!\/fonts\/.*)\.(png|jpg|svg|gif)$/,
                loader: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    }
                }
                // use: ['file-loader']
            },
            {
                test: /(?<=\/fonts\/.*)\.(ttf|woff|woff2|eot|svg)$/,
                loader: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    }
                }
                // use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    }
}
