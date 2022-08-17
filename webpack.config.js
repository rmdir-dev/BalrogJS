const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util"),
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    node: {
        '__dirname': true
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    devServer: {
        static: {
            directory: __dirname,
        },
        compress: true,
        port: 9000,
    },
};
