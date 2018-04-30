const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'my webpack app',
      template: path.resolve(__dirname, '../static/index.html')
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../static'), ignore: ['index.html'] }
    ])
  ],

}