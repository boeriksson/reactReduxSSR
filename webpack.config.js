const webpack = require('webpack');

module.exports = {
    entry: {
        approot: [
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
        filename: '[name].js'
        //filename: '[chunkhash].[name].js'
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
            // manifest contains runtime code that would otherwise live in vendor.. this means project can be
            // rebuilt without changing vendor hash - ie: browser can cash it!
            names: ['vendor', 'manifest']
        })
    ]
};
