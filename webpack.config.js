const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    // declaring our module bundles. each of these should be an entry point for a bunch of imports.
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
        // empties dist dir on build
        new CleanWebpackPlugin(),
        // generates a new index.html file in our dist directory
        new HtmlWebpackPlugin({
            title: 'Testo'
        })
    ],
    // the config for webpack-dev-server
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};