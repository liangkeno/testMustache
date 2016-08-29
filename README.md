##使用webpack构建一个模板引擎##
**使用npm安装一下框架**

<pre>
//新建一个目录 并初始化包
npm init -y
//安装 webpack
npm install webpack --save-dev
//安装 jquery
npm install jquery --save-dev
//安装一个简单模板引擎 mustache
npm install mustache --save-dev
</pre>

**编写webpack配置文件 webpack.config.js**
<pre>
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
</pre>

**新建一个入口文件./app/index.js**
<pre>
var $ = require('jquery');
var Mustache = require('mustache');

var obj = {
	"name": "Chris",
	"value": 10000,
	"taxed_value": 10000 - (10000 * 0.4)
};
//根据对象属性名生成一个模板字符串
var str = 'Hello {{name}}You have just won {{value}} dollars!Well, {{taxed_value}} dollars, after taxes.';
//mustache render 返回渲染的模板
var output = Mustache.render(str, obj);
$('#div').html(output);
</pre>

**新建一个html导入webpack导出的boundle.js**
<pre>
<p>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;title&gt;mustache&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;div&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&#39;./builds/boundle.js&#39;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</p>
</pre>