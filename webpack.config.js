const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '无限进步', // 模板页面标题
      template: './src/assets/index.html' // 模板位置
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
        //use: ["style-loader", "css-loader"],
      },
    ],
  },
};