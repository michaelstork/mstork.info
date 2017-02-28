const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'sass-loader']
				})
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
				loader: 'url-loader?limit=10000&name=fonts/[hash].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
};