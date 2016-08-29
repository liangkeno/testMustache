var $ = require('jquery');
var Mustache = require('mustache');

var obj = {
	"name": "Chris",
	"value": 10000,
	"taxed_value": 10000 - (10000 * 0.4)
};
var str = 'Hello {{name}}You have just won {{value}} dollars!Well, {{taxed_value}} dollars, after taxes.';
var output = Mustache.render(str, obj);
$('#div').html(output);