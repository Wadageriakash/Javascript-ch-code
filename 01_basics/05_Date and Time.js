// Date is an objects

let myDate = new Date()
console.log(myDate); // 2025-07-18T02:09:22.774Z

console.log(myDate.toString()); // Fri Jul 18 2025 07:40:11 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Fri Jul 18 2025
console.log(myDate.toISOString); // [Function: toISOString]
console.log(myDate.toJSON()); // 2025-07-18T02:12:28.313Z
console.log(myDate.toLocaleDateString()); // 18/7/2025
console.log(myDate.toLocaleTimeString()); // 7:42:28 am
console.log(myDate.toLocaleString()); // 18/7/2025, 7:42:28 am

console.log(typeof myDate); // object

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate); // 2023-01-22T18:30:00.000Z

console.log(myCreateDate.toDateString()); // Mon Jan 23 2023
console.log(myCreateDate.toLocaleDateString()); // 23/1/2023
console.log(Date.now());  // 1752805215843
console.log(Date.now() / 1000);  // 1752805241.273
console.log(Math.floor(Date.now() / 1000));  // 1752805269

let newDate = new Date();
console.log(newDate); // 2025-07-18T02:23:56.245Z
console.log(newDate.getDate());  // 18
console.log(newDate.getDay());  // 5
console.log(newDate.getMonth() + 1); // 7



