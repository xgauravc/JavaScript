// let js = "amazing";
// if (js === "amazing") console.log("js is " + js);
// console.log(20 + 34 + 78);

// //Variables


// /*

// Varibales are name given to computer memory that holds some value

// In javascript suggested conventions are to use camel case
// In JS only number, _, $ and letters are used in naming a variable



// */

// let username = "xgauravc";
// let $amount = 20000;
// let _backingVariable = "has value";
// //let 3variable = 'Not accepted variable';
// //let new = "Reserved keyword";
// console.log(username);
// console.warn($amount);
// console.error(_backingVariable);

// //Data types

// /* 
// Every value is either Primitive value or Object value:
// A value is primitive when it is not an object

// //Primitive data types
// -> 7 types

// 1. Number - It is always floating point number, even if haven't defined them. Used for both   decimals and numbers. All numbers are of type number

// 2. strings- sequence of characters single or double quoated
// 3. boolean - true or false
// 4. undefined - defined but not initiazed -> let age;

// 5. null - empty value
// 6. Symbol - value that is unique and cannot be changed. (Not used now)
// 7. bigint - ES2020 for too large integers

// */

// // JavaScript is dynamically typed.
// // Datatypes are automatically defined at runtime.
// // value has a type and not variable.

// let canBeDoneThisWeek = true;
// console.log(canBeDoneThisWeek);

// console.log(typeof canBeDoneThisWeek);
// console.log(typeof 'Gaurav');
// console.log(typeof 22);
// console.log(typeof false);

// canBeDoneThisWeek = "Yes !!"

// console.log(canBeDoneThisWeek) // boolean to string - dynamic typing

// let jx;
// console.log(jx, typeof jx)

// jx = "test text"

// console.log(jx, typeof jx)

// console.log(typeof null) //this is a bug . this should return null. Javascript didn't corrected this bug




// //Various ways of declaring variable
// //let, const, var
// let firstName = "Gaurav" // for declaring mutable values
// const KEY = "AllSupx1" //for declaring immutable values , needs to be initialsed
// var lastname = "Chawre" // legary declaration of variable
// Abbreviation = "GC" // Javascript will accept this . But it is not recommeded


// console.log(firstName)
// console.log(lastname)
// console.log(Abbreviation)
// console.log(KEY)



// //Operators
// //Mathematical operator
// const currentYear = 2023
// const xBirthYear = 1990
// const yBirthYear = 1992

// console.log("The age of X is : ", currentYear-xBirthYear)
// console.log("The age of Y is : ", currentYear-yBirthYear)
// console.log("Older one is : " , currentYear-yBirthYear > currentYear-xBirthYear ? "Y": "X") //ternary operator
// console.log(2*83,2**4,34/17)


// //Assignment operator
// x1 = 10
// y1 = x1>5
// console.log(x1, y1)
// x1+=10
// console.log(x1)
// x1++
// console.log(x1)
// x1*=3
// console.log(x1)

// //Comparison operator

// console.log(x1 === y1, x1 > y1, x1 >= y1, x1 < y1, x1 <= y1)





// /////// Operator Precedence ////////
// let x,y = 10 -3-5 //undefined 2
// console.log(x, y)
// x = y = 10 - 3 - 5
// console.log(x, y)




////template literals////
const firstName2 = "Gaurav"
const birthYear = 1990
let nowYear = 2023
let profession = "Programmer"

console.log("Hi, I'm " + firstName2 +". My age is "+ (nowYear-birthYear)+ " and I'm a " + profession+" by profession")
console.log(`Hi , I'm ${firstName2} My age is ${nowYear-birthYear}. And I'm ${profession} by profession`)

//multi line comment
console.log("Hi \n\
this \n\
is")
console.log(`hi
this is 
multiline comment`)