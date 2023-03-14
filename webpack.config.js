const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/homePage.js',
        animations: './src/components/LikeButton.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
};
