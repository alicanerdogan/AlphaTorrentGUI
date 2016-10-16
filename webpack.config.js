module.exports = {
  entry: './src/app.jsx',
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  }
};