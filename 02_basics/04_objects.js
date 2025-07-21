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
const obj1 = {}