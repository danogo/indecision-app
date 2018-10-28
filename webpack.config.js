const path = require('path');

module.exports = {
  // entry point for webpack
  entry: './src/app.js',
  // plac where it give us bundled file
  output: {
    // it has to be absolute path, we use __dirname - built-in node current path and path.join package(without installing, already available with node)
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    // place from what to serve via webpack-dev-server
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
