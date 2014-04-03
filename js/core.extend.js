/*
 * 最佳实践
 * 1.将字符串转换为整数
 * Good: parseInt("010", 10) //总是指定基数，表明转换为10进制而不是8进制
 * Better: + "010"
 * 
 * 2.总是使用===做想等性比较，避免意料之外的类型转换
 * 3.定义字面量时，最后一个值的结尾不要使用逗号
 * 4.在代码中谨慎使用eval函数
 * 5.在语句的结尾总是使用分号
 * 6.避免使用全局变量，并总是使用var关键字声明变量
 * 7.对匿名函数使用首字母大写表示该函数将作为new操作符的构造函数。但其他任何函数名都不应该首字母大写
 * 8.不要使用with语句
 * 9.不要在循环中创建函数，这种方式非常低效
 * */

/*
 * 扩展内置类型的方法
 * usage:
 * String.method('boolean', function(){return "true"==this});
 * > "true".boolean();
 * True
 * */
Function.prototype.method = function(name, func){
	this.prototype[name] = func;
	return this;
};

/*
 * 将< 、>、"、&转换为html实体
 */
function htmlEscape(text){
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch(match){
			case "<": return "&lt;";
			case ">": return "&gt;";
			case "&": return "&amp;";
			case "\"": return "&quot;";
		}
	});
}