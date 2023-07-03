// https://www.w3schools.com/js/js_if_else.asp

let age = 20
let nationality = 'USA'
let bouncer = false

if (age < 18) {
    console.log('Get outta here you are underage')
} else if (age > 18 && nationality != "USA") {
    console.log("Congratulations! Now you can come into a bar and have a pint")
} else if (age > 18 || !bouncer) {
    console.log("Bouncer is not here, RUN INSIDE!")
} else {
    console.log("Where are you coming from")
}

// && when we have more than one condition
// || when we have one or the other condition to comeback as true

const number = "5";

const message = number == 5 ? 'the number is 5' : 'I do not know this number';

if (number === 5) {
    console.log('the number is 5');
} else {
    console.log('I do not know this number');
}

console.log(message) // the number is 5

// == comapres the values without checking on the type of data
// === compares the type AND the value