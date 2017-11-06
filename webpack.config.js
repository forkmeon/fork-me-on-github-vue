const path = require('path');

module.exports = {
  entry: {
    'fork-me-on-github-vue': path.join(__dirname, 'src'),
    homepage: path.join(__dirname, 'homepage')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library:'[name]',
    libraryTarget: 'umd'
  },
  externals: [
    {
    }
  ],
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }
    ]
  }
};
