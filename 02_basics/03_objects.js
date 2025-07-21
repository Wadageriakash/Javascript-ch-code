// object can be declaired in two ways literal object and constructor function.
// by literal object singleton is not possible.
// by constructor function singleton is possible.


// symbol declaration
const mySym = Symbol("Key1");

// Object Literal
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // mySym: "myKey1", // using string as key
    [mySym]: "myKey1",
    age: 30,
    email: "hitesh@google.com",
    localtion: "Jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

console.log(JsUser.name) // Hitesh
console.log(JsUser["name"]) // Hitesh
console.log(JsUser["full name"]) // Hitesh Choudhary
console.log(JsUser["mySym"])  // myKey1
// console.log(typeof JsUser["mySym"])  // string
console.log(typeof JsUser[mySym])
console.log(JsUser[mySym]) // myKey1

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // Object.freeze makes the object immutable, you cannot change the properties or add new properties.
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

console.log(JsUser.lastLoginDays); //['Monday', 'Tuesday', 'Wednesday']
console.log(JsUser.lastLoginDays[1]); // Tuesday
console.log(JsUser.lastLoginDays.length); // 3
console.log(JsUser.lastLoginDays[JsUser.lastLoginDays.length - 1]); // Wednesday
console.log(JsUser["lastLoginDays"][1]); // Tuesday
console.log(JsUser["lastLoginDays"]) // [ 'Monday', 'Tuesday', 'Wednesday' ]

JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting()); // TypeError: JsUser.greeting is not a function
console.log(JsUser.greeting()); // Hello Js User
console.log(JsUser.greeting); // [Function (anonymous)]

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}
console.log(JsUser.greetingTwo()); // Hello Js User Hitesh

