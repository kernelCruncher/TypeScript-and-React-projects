import { read } from "fs";

console.log('Hello World');

export class TestClass  {
    key1: string;
    key2: number;
    key3:  number[];
}

let a: TestClass = new TestClass()
a.key1 = "hello",
a.key2=1
a.key3 = [1,2,3,4]
console.log(a.key1)
