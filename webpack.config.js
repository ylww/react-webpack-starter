var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/static/'  // Required for webpack-dev-server,对应的地址为/static/bundle.js
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
            include: path.join(__dirname, '.')
        }]
    }
};