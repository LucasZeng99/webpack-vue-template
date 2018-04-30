const merge = require('webpack-merge')
const base = require('./webpack.base')



module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src/assets'),
    port: 9000,
    compress: true
  }
})