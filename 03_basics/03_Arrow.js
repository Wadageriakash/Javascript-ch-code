const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${username}, welcome to the website!`); // ReferenceError: username is not defined
        console.log(`${this.username}, welcome to the website!`); // hitesh, welcome to the website!

    }
    // this keyword refers to the object itself
    // this keyword refers to the currnet context.
    // this.username refers to the username property of the user object
}

user.welcomeMessage(); // hitesh, welcome to the website!
user.username = "sam";
user.welcomeMessage(); // sam, welcome to the website!



// When a function is called without any explicit object context, this refers to the global object. In a browser, this is the window object. In Node.js, it's the global object.
function sayHello() {
  console.log(this); // In a browser, this logs the `window` object
  console.log("Hello from " + this.name);
}

// this.name is undefined
sayHello();


// 3. Constructor Function:
// When a function is used as a constructor with the new keyword, this refers to the new object being created.
function Person(name){
    this.name = name;
    this.sayHello = function(){
        console.log("Hello, my name is " + this.name);
    };
}
const alice = new Person("Alice");
alice.sayHello(); // Hello, my name is Alice


// 4. Arrow Functions:
// Arrow functions do not have their own this context. They inherit this from the surrounding lexical scope.
const user = {
    name: "Bob",
    sayHello: function(){
        setTimeout(() => {
            // The arrow function inherits `this` from the `sayHello` method,
            // so `this` still refers to the `user` object.
            console.log("Hello, my name is "+ this.name);
        }, 1000);
    }
}

user.sayHello(); // Hello, my name is Bob


const chai = () =>{
    let username = "hitesh"
    console.log(this.username); // undefined
    console.log(this); // {}
}
chai(); 

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => {username: "hitesh"} // undefined
const addTwo = (num1, num2) => ({username: "hitesh"}) // { username: 'hitesh' }

console.log(addTwo(3, 7)); // 10