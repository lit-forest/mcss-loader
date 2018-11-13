const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	devtool: 'cheap-source-map',
	module: {
		rules: [{
			test: /\.mcss$/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: "css-loader"
			}, {
				loader: path.resolve('./src/mcss-loader.js'),
				options: {
					format: 3,
					sourcemap: true
				}
			}]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '/css/[name].[hash:8].css',
			chunkFilename: '/css/[name].[hash:8].css'
		}),
	]
};