const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'lego',
      appMountId: 'app',
      mobile: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('postcss-cssnext')()]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'bundle.js'
  }
}
