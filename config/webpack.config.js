
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  mode: "development",
  module: {
    rules: [
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
        use: [ 'style-loader', 'css-loader' ]
      },

    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      alwaysWriteToDisk: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 9000,
    compress: true
  }
}