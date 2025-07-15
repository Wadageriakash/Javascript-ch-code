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


//**************************OPERATION********************************** */
let value = 3
let negValue = -value
console.log(negValue) // -3

console.log(2+2) // 4
console.log(2-2) // 0
console.log(2*2) // 4
console.log(2**3) // 8
console.log(2/3) // 0.666666
console.log(2%3) // 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3) // hello hitesh

console.log("1" + 2 + 2) // 122
console.log("1" + 2)   // 12
console.log(1 + 2 + "2"); // 32

console.log(+true) // 1
console.log(+"") // 0

let gameCounter = 100
++gameCounter
console.log(gameCounter) // 101
gameCounter++
console.log(gameCounter); // 101

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// ***************** COMPARASION ********************
console.log(2>1) // true
console.log(2>=1) // true
console.log(2<1) // false
console.log(2==1) // false
console.log(2!=1) // true

console.log("2" > 1) // true
console.log("02" > 1) // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// === (Strict check)

console.log("2"=== 2); // false


// Primitive datatypes:
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt


// Reference type (It is also called Non primitive)
// Arry, Objects, Functions
// For the Non primitive data type will having its typeof is object
// Javascript is a dynamic typed language

const scoreValue = null;
console.log(scoreValue); // null

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);  // Symbol(123)
console.log(anotherId);  // Symbol(123)
console.log(id === anotherId); false

// BigInt 
const bigNumber = 345678901234567890n 
console.log(typeof bigNumber) // bigint

// ***************Memories in Javascript
// There are two types of Memory in the javascript
// Stack (Primitive), Heap(Non-primitive)

let myYoutubeName = "hiteshchoudary"

let anotherName = myYoutubeName

