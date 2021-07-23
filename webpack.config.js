const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


const browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        globalObject: "this",
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
        })
    ]
}


const serverConfig= {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],

    output: {
        path: __dirname,
        filename: 'server.js',
        globalObject: "this",
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
        })
    ]
}

module.exports = [browserConfig, serverConfig];