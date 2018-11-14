## mcss-loader
Loads a MCSS file and compiles it to CSS.

Use the css-loader and style-loader to turn it into a JS module and the mini-css-extract-plugin to extract it into a separate file. 

### Install
```
npm install mcss-loader --save-dev
```

### Examples
hain the mcss-loader with the [css-loader](https://github.com/webpack-contrib/css-loader) and the [style-loader](https://github.com/webpack-contrib/style-loader) to immediately apply all styles to the DOM.

ser more options in [mcss](https://github.com/leeluolee/mcss)

``` javascript
// webpack.config.js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	devtool: 'cheap-source-map',
	module: {
		rules: [{
			test: /\.mcss$/,
			use: [{
				loader: MiniCssExtractPlugin.loader //or 'style-loader' in development
			}, {
				loader: "css-loader"
			}, {
				loader: 'mcss-loader',
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
```

### Developer
* download mcss-loader from github
```
git clone  https://github.com/lit-forest/mcss-loader.git
```
* run dev
```
npm run dev 
```

### License
MIT