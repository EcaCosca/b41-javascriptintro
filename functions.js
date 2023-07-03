// https://www.w3schools.com/js/js_functions.asp

let message = "Hey, this is the global scope"

// console.log(message);

function talk() {
    let message = 'I have no mouth, and I must scream'
    return message
}

// console.log(talk());

// ANONYMOUS FUCNTIONS
// STORED INSIDE A VARIABLE
// USING THE "FUNCTION" KEYWORD
const anonymousFunction = function () {
    return ("Hey, I am an anonymous function inside of a variable")
}

// WITHOUT USING THE "FUNCTION" KEYWORD AND USING AN ARROW "=>" INSTEAD
const anonymousArrowFunction = () => "Hey, I am an anonymous arrow function inside of a variable"

// console.log(anonymousFunction())

// THIS IS PART OF AN EXAMPLE OF REAL APLICATION OF ANONYMOUS FUNCTIONS
// document.querySelector('h1').addEventListener('click', function(){
    //     alert("YOU HAVE CLICKED THE H1!")
    // }) 
// THIS IS PART OF AN EXAMPLE OF REAL APLICATION OF ANONYMOUS ARROW FUNCTIONS
document.querySelector('h1').addEventListener('click', ()=>alert("YOU HAVE CLICKED THE H1!")) 

// PARAMETERS INN FUNCTIONS AND ARGUMENTS
// Note the difference between parameters and arguments: Function parameters are the names listed in the function's definition. Function arguments are the real values passed to the function
function greeter(name, batch, instructor = "Enrique") {
    return `Hello ${name}!! Welcome to WBS Web Development course! Your batch is number ${batch}. Your instructor is ${instructor}`;
}

const greetArrow = (name, batch, instructor = "Enrique") => `Hello ${name}!! Welcome to WBS Web Development course! Your batch is number ${batch}. Your instructor is ${instructor}`;

console.log(greeter('Jerry', 41));
console.log(greeter('Chris', 41, "Lilian"));
console.log(greetArrow('Tamer', 41, "Eca"));
   
const square = (number) => {
    return number * number;
}

square(3); // 9
   
