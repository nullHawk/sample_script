// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development',
  entry: './script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false, // or provide a polyfill if needed
      "vm": false, // or provide a polyfill if needed
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "child_process": false // or provide a polyfill if needed
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        resolve: {
            fullySpecified: false,
          },
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
