const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require ('clean-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
		filename: '[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: { port: 3000 },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
};