// object declaring using the singleton pattern

const tinderUser = new Object(); // This is singleton object
// const tinderUser = {}; // This is non singleton object
console.log(tinderUser);  {}

tinderUser.id = "123abc";
tinderUser.name = "Hitesh";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // { id: '123abc', name: 'Hitesh', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
        
    }
}

console.log(regularUser.fullname); // { userfullname: { firstname: 'Hitesh', lastname: 'Choudhary' } }    
console.log(regularUser.fullname.userfullname); // { firstname: 'Hitesh', lastname: 'Choudhary' }
console.log(regularUser.fullname.userfullname.firstname);  // Hitesh
console.log(regularUser.fullname?.userfullname.lastname); // Choudhary

// Combining Objects
const obj1 = {1: "a", 2:"b"};
const obj2 = {3: "a", 4:"b"};
const obj7 = {5: "a", 6:"b"};

const obj3 = {...obj1, ...obj2}; // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
const obj4 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj6 = Object.assign({}, obj1, obj2, obj7); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// assign is a static function of Object and here it will receive multiple objects and merge them into a new object.
// And assign will not mutate the original objects, it will create a new object with the merged properties.
// If there are duplicate keys, the last one will overwrite the previous ones.
console.log(Object.keys(obj6)); // [ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(obj6)); // [ 'a', 'b', 'a', 'b', 'a', 'b' ]
console.log(Object.entries(obj6)); // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'a' ], [ '4', 'b' ], [ '5', 'a' ], [ '6', 'b' ] ]
console.log(Object.entries(obj6).length); // 6
console.log(Object.keys(obj6).length); // 6
console.log(Object.values(obj6).length); // 6
console.log(Object.entries(obj6).length); // 6
// assign will receive the two arguments like the first one is the target object and the rest are the source objects.
// so here we are passing an empty object as the target object and the rest are the source objects.

const users = [
    {id:1, email:"hitesh@gmail.com"},
    {id:2, email:"hitesh@gmail.com"},
    {id:3, email:"hitesh@gmail.com"},
]
users.forEach((user) => {
    console.log(user.email); //
}); // hitesh@gmail.com
// hitesh@gmail.com
// hitesh@gmail.com


users[1].email 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Hitesh', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Hitesh' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("id")); // true
console.log(tinderUser.hasOwnProperty("Akash")); // false


// Object de-structuring and JSON API Introduction:
// ========================================================
const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh",
}
// course.courseInstructor // Hitesh
const {coursename, price, courseInstructor} = course; // This is object destructuring
console.log(courseInstructor) // Hitesh

const {courseInstructor: instructor} = course;
console.log(instructor); // Hitesh

// const navbar = ({company}) =>{ // this is react where company used in braces for the Object de-structuring.

// }
// navbar(company = "hitesh");

// {
//     "name": "hitesh",
//     "coursename": "Javascript",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {}
]