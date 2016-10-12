var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './index.jsx',
    output: {
        filename: './build/world-clock.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('build/styles.css', {
            allChunks: true
        })
    ]
}
