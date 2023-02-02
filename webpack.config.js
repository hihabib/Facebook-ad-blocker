const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    devtool: 'source-map',
    stats: {
        all: false,
        errors: true,
        builtAt: true,
    },
    entry: './src/scripts/index.js',
    devServer: {
        static: './src',
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [ 
        new CopyPlugin({
            patterns: [
                { from: "./src/public", to: "./" }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    }
};