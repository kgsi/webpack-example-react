const path                       = require('path');
const ExtractTextPlugin          = require('extract-text-webpack-plugin');
const BrowserSyncPlugin          = require('browser-sync-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
	devtool: 'source-map',
	entry: {
		entry: './src/js/entry.js'
	},
	output: {
		path: path.join(__dirname, 'app/js'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loaders: "style!css" },
			{
	          test: /\.scss/,
	          loaders: ["style-loader", "css-loader", "sass-loader"]
	        },
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
				cacheDirectory: true
				}
			}
		]
	},
	plugins: [
		new WebpackBuildNotifierPlugin(),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { baseDir: ['app'] }
		})
	]
};
