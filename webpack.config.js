const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js', // 文件名加hash为了方便缓存
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '无限进步', // 模板页面标题
      template: './src/assets/index.html' // 模板位置
    }),
    new MiniCssExtractPlugin({ // CSS抽离为文件
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
        // use: ["style-loader", "css-loader"] // 后者的内容通过前者添加到style标签内
      }
    ]
  },
  devtool: 'inline-source-map', // 热更新
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000 
    // "start": "webpack serve", package.json 启动
    // 文档中"start": "webpack-dev-server --open", 报错
  },
};