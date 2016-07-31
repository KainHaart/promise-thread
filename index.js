/**
 * @param {Object.<function>} methodsMap
 * @param {Object=} opt_options
 */
module.exports = function(methodsMap, opt_options) {
	let head = Promise.resolve();

	const thread = {};
	Object.keys(methodsMap).forEach(function(key) {
		thread[key] = function() {
			head = head.then(() => methodsMap[key].apply(methodsMap, arguments));
			return head;
		}
	});

	// TODO: Add ._ property fo controlling methods
	// TODO: Automate test
	// TODO: add optional delay between calls
	// TODO: use in ttrss api

	return thread;
};
