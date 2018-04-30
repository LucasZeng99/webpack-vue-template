const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')


module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src/assets'),
    port: 9000,
    compress: true,
    stats: 'minimal'
  },
})