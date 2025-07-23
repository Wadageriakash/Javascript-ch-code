
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();
sayMyName; // This is nothing but reference


function addTwoNumbers(number1, number2){
   console.log(number1 + number2)
}

addTwoNumbers(); // NaN
addTwoNumbers(3, "6"); // 36
addTwoNumbers(3, 6); // 9
addTwoNumbers(3, "a"); // 3a
addTwoNumbers(3, null); // 3

// we can store the function into variable.
const result = addTwoNumbers(3, 6)
console.log("result : ", result) // result :  undefined


function multipliTwoNumber(number1, number2){
   return (number1 * number2)
}

const res2 = multipliTwoNumber(3, 6)
console.log(res2);


function loginUserMessage(username = "Sam"){
    // Here Sam is default value
    if(username === undefined){
        console.log("Please enter a username");
        return 
    } 
    return `${username} Just logged in.`
    
}

const loginresult = loginUserMessage("Akash");
console.log(loginresult); //Akash Just logged in.
console.log(loginUserMessage());  // undefined (If there is no default username, it will return undefined).
console.log(loginUserMessage()); // Sam Just logged in.



// Here for the three dot operator we will call the spread operator as well as rest operator
// Here we will call the restoperator
function calculationCartPrice(...num1){
    return num1;
}
console.log(calculationCartPrice(200, 400, 600, 2000, 300, 300)) // [ 200, 400, 600, 2000, 300, 300 ]


function calculationCartPrice2(val1, val2, ...num1){
    return num1;
}
// Here val1 = 200 , val2 = 400
console.log(calculationCartPrice2(200, 400, 600, 2000, 300, 300))  // [ 600, 2000, 300, 300 ]

// Object passing as an argument into the function
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyObject){
    
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // Username is hitesh and price is 199

handleObject({
    username: "Sam",
    price: 300
}); // Username is Sam and price is 300

// Array passsing as an argument into the function

const newArray = [200, 300,600, 700];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray)); // 300
console.log(returnSecondValue([200, 300,600, 700])); // 300
