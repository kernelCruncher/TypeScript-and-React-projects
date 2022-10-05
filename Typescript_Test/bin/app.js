"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClass = void 0;
console.log('Hello World');
class TestClass {
}
exports.TestClass = TestClass;
let a = new TestClass();
a.key1 = "hello",
    a.key2 = 1;
a.key3 = [1, 2, 3, 4];
console.log(a.key1);
