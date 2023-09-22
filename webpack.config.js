const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'src'), // 'src' klasörünü static dosya olarak kullan
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Güncellendi: index.html dosyanın yolu
    }),
  ],
};
