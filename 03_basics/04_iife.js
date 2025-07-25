// Immediatrly Invoked Function Expression (IIFE) :
// ========================================================

// (function chai() {
//     console.log(`DB CONNECTED`)
// })() // DB CONNECTED

(function chai() {
    console.log(`DB CONNECTED`);
})();  // DB CONNECTED

( function aurcode()  {
    console.log(`DB CONNECTED TWO`);
})(); // DB CONNECTED TWO

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh') // DB CONNECTED TWO hitesh