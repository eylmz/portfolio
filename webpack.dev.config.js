const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/template.html'
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
    filename: 'bundle.js',
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.(css|less)$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  }
};
