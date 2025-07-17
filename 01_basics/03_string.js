
const name = "hitesh"
const repoCount = 50;

console.log(name + repoCount + "Value"); // hitesh50Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is hitesh and my repo count is 50


// Here string is an Object
const gameName = new  String('hitesh') 
console.log(gameName) // [String: 'hitesh']
// String {'hitesh'}
// 0: "h"
// 1: "i"
// 2: "t"
// 3: "e"
// 4: "s"
// 5: "h"
// length: 6

console.log(gameName[0]) // h
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // HITESH
console.log(gameName.charAt('2')); // t
console.log(gameName.indexOf('t')); // 2
console.log(gameName.valueOf(1)); //hitesh


const newString = gameName.substring(0, 4);
console.log(newString) //hite

const anotherString = gameName.slice(-7, 4);
console.log(anotherString); // hite

const newStringOne = "     hitesh  ";
console.log(newStringOne.trim()); // hitesh
console.log((newStringOne.trimEnd())); //      hitesh
console.log((newStringOne.trimStart())); // hitesh  

const url = "https://hitesh.com/hitesh%20choudary";
url.replace('%20', '-')
console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudary

console.log(url.includes('sundar'))  // false
console.log(url.includes('http')); // true
console.log(gameName.split('-')); // [ 'hitesh' ]
console.log(gameName.search('http')); // -1



