const pokemon = ['Pikachu', 'Squirtle', 'Charmander']
console.log(pokemon[0]) // Pikachu
console.log(pokemon[2]) // Charmander
console.log(pokemon[3]) // undefined

// console.log(pokemon.reverse()) // ['Charmander', 'Squirtle', 'Pikachu']

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
  
  // Runs 5 times, with values of step 0 through 4
  // I encountered 0 pokemon so far
  // I encountered 1 pokemon so far
  // I encountered 2 pokemon so far
  // ...

//   ++
let number = 1
// number = number + 1
number++
number--

console.log(number)

pokemon.forEach(element => console.log(`You are now watching the ${element} pokemon`))
  