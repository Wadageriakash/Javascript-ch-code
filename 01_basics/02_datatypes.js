 "use strict"; // treat all js code as newer version

// alert("Hello") // we are using nodejs, not browser

let name = "hitesh"
let age = 18
let isLoggedIn = false;
let state = null;

// number (It has its range 2 to power 53)
// bigint 
// string => ""
// boolean => true/false
// null => It is a standalone value
// undefinied => till value is not assigned
// symbol => unique
// Object

console.log(typeof "Akash") // string
console.log(typeof age) // number
console.log(typeof null) // object
console.log(typeof undefined) //undefined



// Datatype conversion confusion............
let score = "33"
console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Number

let scr = "33abc"
console.log(typeof scr) // string

let scoreNumber = Number(scr)
console.log(typeof scoreNumber); // number
console.log(scoreNumber); // NaN

let num = null;
console.log(num); // null

let numun = undefined;
console.log(numun); // undefined

let boolenvalue = false;
console.log(boolenvalue) // false

let isLoggedInnum = 1
let booleanLoggedIn = Boolean(isLoggedInnum)
console.log(booleanLoggedIn); // true

let myName = ""
let booleanname = Boolean(myName)
console.log(booleanname) ; // false


let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string



