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
    static: [
      { directory: path.join(__dirname, 'public'), publicPath: '/', serveIndex: true },  // Burası değişti
      { directory: path.join(__dirname, 'src'), publicPath: '/' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // kaynak dosyanın yolu
      filename: './index.html' // hedef dosya adı ve yolu (dist klasöründe)
    }),
  ],
};
