const loaderUtils = require('loader-utils')
const mcss = require('mcss')

module.exports = function (source) {

	const callback = this.callback;
	const options = loaderUtils.getOptions(this);

	mcss(options)
		.translate(source)
		.done(function (cssStr) {
			callback(null, cssStr);
		}).fail(function (err) {
			callback(err);
		});
};