const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const browserConfig = {
    entry: './src/browser/index.js',
    watchOptions: {
        poll: true,
      },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        }),
        new NodemonPlugin()
    ]
}


const serverConfig= {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    watchOptions: {
        poll: true,
      },
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
        new NodemonPlugin()
    ]
}

module.exports = [browserConfig, serverConfig];