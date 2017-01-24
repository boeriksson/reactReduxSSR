const webpack = require('webpack');

module.exports = {
    entry: {
        js: [
            './client/index.js'
        ],
        vendor: [
            'react', 'react-dom'
        ]
    },
    devtool: 'source-map',
    output: {
        path: './static',
        publicPath: '/static/',
        filename: '[chunkhash].[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            './static'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};
