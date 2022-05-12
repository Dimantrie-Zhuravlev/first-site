const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NOVE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `./js/${filename('js')}`,
        // publicPath: './build/',
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, "dist") }
            ]
        })
    ],
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(?:|jpe?g|png|gif|svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: () => {
                        return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
                    },
                },
            },
            {
                test: /\.(?:|woff2|woff)$/i,
                type: 'asset/resource',
                generator: {
                    filename: () => {
                        return isDev ? 'fonts/[name][ext]' : 'fonts/[name].[contenthash][ext]';
                    },
                },
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

        ],
    }
};