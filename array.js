const pokemon = ['Pikachu', 'Squirtle', 'Charmander']
console.log(pokemon[0]) // Pikachu
console.log(pokemon[2]) // Charmander
console.log(pokemon[3]) // undefined

console.log(pokemon.length); // tells me how many items I have inside of array
console.log(pokemon[pokemon.length-1]); // tells me how many items I have inside of array

// FOR LOOP IS DONE
for (let i = 0; i < pokemon.length; i++) {
    console.log("i is equal to " + i)
    console.log(`I encountered ${pokemon[i]}, I have caught ${i+1} pokemon so far`);
}
console.log("For loop is done")

for (let k = 100; k >= 0; k--) {
    console.log("i is equal to " + k)
}
console.log("The condition is not true anymore, For loop is done")


//   ++
let number = 1
// number = number + 1
number++
number--

console.log(number)

// forEach()
pokemon.forEach(element => console.log(`You are now watching the ${element} pokemon`))

// map()
// https://www.w3schools.com/jsref/jsref_map.asp

let numericValues = [1,2,54,36,3.4]
let newArray = numericValues.map(number => number*number)

// map() does not change the original array.
console.log(numericValues);
console.log(newArray);

// , filter()
// https://www.w3schools.com/jsref/jsref_filter.asp
const ages = [32, 33, 16, 40];
const result = ages.filter(age=>age >= 18);

console.log("ages: "+ages);
console.log("result "+result);

//  sort()
// https://www.w3schools.com/jsref/jsref_sort.asp
// SORT WILL MUTATE THE ORIGINAL ARRAY
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort();
console.log(fruits);

// , reverse()
// https://www.w3schools.com/jsref/jsref_reverse.asp
console.log(pokemon);
pokemon.reverse() // ['Charmander', 'Squirtle', 'Pikachu']
console.log(pokemon);


// YOU CAN FIND ALL ARRAY MTHODS HERE 
// https://www.w3schools.com/jsref/jsref_obj_array.asp