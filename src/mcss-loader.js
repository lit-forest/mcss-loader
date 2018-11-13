const loaderUtils = require('loader-utils')
const mcss = require('mcss')

module.exports = function (source) {

	const callback = this.callback;
	const options = loaderUtils.getOptions(this);

	console.log('###########')
	console.log(this.resource)
	console.log('###########')

	mcss(options)
		.translate(source)
		.done(function (cssStr) {
			callback(null, cssStr);
		}).fail(function (err) {
			callback(err);
		});
};