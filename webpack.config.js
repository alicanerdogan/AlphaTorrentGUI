module.exports = {
  entry: './src/app.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  }
};