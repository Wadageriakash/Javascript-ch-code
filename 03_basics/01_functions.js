
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

