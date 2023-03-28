let js = "amazing";
if (js === "amazing") console.log("js is " + js);
console.log(20 + 34 + 78);

//Variables


/*

Varibales are name given to computer memory that holds some value

In javascript suggested conventions are to use camel case
In JS only number, _, $ and letters are used in naming a variable



*/

let username = "xgauravc";
let $amount = 20000;
let _backingVariable = "has value";
//let 3variable = 'Not accepted variable';
//let new = "Reserved keyword";
console.log(username);
console.warn($amount);
console.error(_backingVariable);

//Data types

/* 
Every value is either Primitive value or Object value:
A value is primitive when it is not an object

//Primitive data types
-> 7 types

1. Number - It is always floating point number, even if haven't defined them. Used for both   decimals and numbers. All numbers are of type number

2. strings- sequence of characters single or double quoated
3. boolean - true or false
4. undefined - defined but not initiazed -> let age;

5. null - empty value
6. Symbol - value that is unique and cannot be changed. (Not used now)
7. bigint - ES2020 for too large integers

*/

// JavaScript is dynamically typed.
// Datatypes are automatically defined at runtime.
// value has a type and not variable.

let canBeDoneThisWeek = true;
console.log(canBeDoneThisWeek);

console.log(typeof canBeDoneThisWeek);
console.log(typeof 'Gaurav');
console.log(typeof 22);
console.log(typeof false);


