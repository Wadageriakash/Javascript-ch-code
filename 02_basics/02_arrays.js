const marvel_heros = ["thor",  "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

marvel_heros.push(dc_heros);
console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
console.log(marvel_heros.length); //4
console.log(marvel_heros[3][1]); // batman

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2, ,3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

Array.isArray("Hitesh"); // false
Array.from("Hitesh"); // [ 'H', 'i', 't', 'e', 's', 'h' ]

Array.from({name: "hitesh"}); // [ <1 empty item> ] Intresting gothrough again

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

