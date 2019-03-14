``` js
module.exports = {
	// ...
	module: {
		// ...
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader', 'fis-code-loader'],
		}]
	}
};
```
