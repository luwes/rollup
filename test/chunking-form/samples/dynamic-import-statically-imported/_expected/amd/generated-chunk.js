define(['require', 'exports'], function (require, exports) { 'use strict';

	function foo() {
		console.log('dep2');
	}

	Promise.resolve().then(function () { return dep1; });



	var dep1 = /*#__PURE__*/Object.freeze({

	});

	exports.foo = foo;

});
