// /**
//  *
//  *
//  * @param {Function} fn
//  */
// function _new(fn, ...args) {
// 	const obj = {};
// 	Object.setPrototypeOf(obj, fn.prototype);
// 	const result = fn.apply(obj, args);
// 	// 根据规范，返回 null 和 undefined 不处理，依然返回obj
// 	return result instanceof Object ? result : obj;
// }

// function foo(a, b) {
// 	this.a = a;
// 	this.b = b;
// }

// foo.prototype.sayA = function() {
// 	console.log(this.a);
// }

// const obj = _new(foo, 2, 6);
// console.log(obj);
// obj.sayA();
// console.log(_new(foo, '2', 's'));

function Foo () {
	getName = function () { console.log(1) }
	return this
}
Foo.getName = function () { console.log(2) }

Foo.prototype.getName = function () { console.log(3) }

var getName = function () { console.log(4) }

function getName () { console.log(5) }

//输入的值
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();