// undefined 和 null
let a: undefined = undefined;
let b: null = null;

// number
let decimal: number = 1;
let hex: number = 0xff;
let binary: number = 0b101;
let octal: number = 0o777;

// string
let str1: string = "Hello TypeScript";
let myName: string = `TypeScript`;
let str2: string = `Hello ${myName}`;
let age: string = `My age is ${decimal + 1}`;

// boolean
let isDone: boolean = true;
let isTrue: boolean = false;

// bigint
// 注意需要在整数字面量后面加n来定义一个 BigInt
let big: bigint = 9007199254740991n;

// symbol
let symbol1: symbol = Symbol("key");

// object
let obj: object = {};
