const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('styles.css');
const extractCss = new ExtractTextPlugin('aos-styles.css');

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
				test: /\.css$/,
				use: extractCss.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap:true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap:true
							}
						},
					]
				})
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap:true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap:true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap:true
							}
						}
					]
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
		extractCss,
		extractSass,
	],
};