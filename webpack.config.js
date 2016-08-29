var path = require('path');
var Root = path.resolve(__dirname);
var App_Root = path.resolve(Root, 'app');

module.exports = {
	entry: App_Root,
	output: {
		path: 'builds',
		filename: 'boundle.js'
	}
};