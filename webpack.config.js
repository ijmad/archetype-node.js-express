const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    target: 'node',
    entry:  {
        server: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'dist.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}
