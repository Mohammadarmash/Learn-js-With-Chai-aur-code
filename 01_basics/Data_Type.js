// (7)Primitive Data_Type
//(3)Reference (Non Primitive) Data_Type

//Primitive Data_Type
 /*String
 Number
 Boolearn
 Null
 Undefined
 Symbol
 BigInt*/

// String:
let a="Armash";
console.log(a);
console.log(typeof a);

// Number:
let b= 59;
console.log(b);
console.log(typeof b);

//Boolearn 
let bool = true;
console.log(bool);
console.log(typeof bool);

//Null
let N = null;
console.log(N);
console.log(typeof N);

// Undefine 
let un;
console.log(un);
console.log(typeof un);

// Symbol
let sym = Symbol('123');
console.log(sym);
console.log(typeof sym);

//BigInt
let BN = 9123354453478n
console.log(BN);
console.log(typeof BN);
// *************************************


// Reference (Non Primitive) Data_Type
// Array, Objects, Funcations

// Array
let Heros = ["Holy prophet muhammad sallallahu alaihi wasallam", "Abu Bakar", "Umar", "Usman", "Ali"];

console.log(Heros);
console.log(typeof Heros);

//Object:
let Student = {
    Name: "Armash",
    age: 22,
    Roll: 59
}
console.log(Student);
console.log(typeof Student);

//Funcations

let Func = function () {
 console.log("Hello World");
}
console.log(typeof Func);