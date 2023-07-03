// PRIMITIVE DATA TYPES

// NUMBERS - INTEGERS
const int = 42;
const notInt = "42";
const intAndSomethinElse = 4.5;
const intNegative = -42;
// console.log(typeof int);
// console.log(typeof notInt);

// STRING
const firstStr = "This is a string";
const secondStr = 'This is another string';
const thirdStr = `This right here? ${secondStr}, again`;
// console.log(firstStr+" that concatenates another string right after")
// console.log(secondStr)
// console.log(thirdStr)

// BOOLEANS
let underAge = false
// console.log(underAge)
// console.log(!underAge)

// NULL
const nullValue = null;
const nullValue1 = "null";
// console.log(nullValue);
// console.log(typeof nullValue2);

// ARRAY
const arr = [
    'strings',
    "several",
    `bactics`,
    true,
    false,
    42,
    42.24,
    -42,
    [   "Matryoshka",
        [   "off",
            ['arrays']
        ]
    ]
]
// we use indexing with square brakets to acces the differnt positions inside of an array
// console.log(arr[8][1][1][0])

const orderOfIndexesInAnArray = [
    "To access the first position off this array we use the syntax '[0]'",
    1,
    2,
    3,
    [
        "[4][0]",
        "[4][1]",
        "[4][2]",
        "[4][3]"
    ]
]
console.log(orderOfIndexesInAnArray[0])

// OJECTS
const obj = {
    // WE USE KEY VALUE PAIRS TO STORE INFORMATION
    name: "Clara",
    age: 33,
    referenceForUnderAge: underAge,
    languages: ["spanish", "english", "croatian"],
    degree: {
        title: "Acountant",
        year: 2016,
        courses:["history", "legal"]
    }
}
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.referenceForUnderAge)
// console.log(obj.languages[2])
// console.log(obj.degree.curses[0]);

// ASSIGNMENT AND REASSIGNMENT

const pikachu = 'pikachu'
let squirtle = "squirtle"
var dinasour = "trex" // we don't use var anymore

// pikachu = "raychu" // we cannot reassign when we use const
squirtle = "warturtle"
charmander = "charmander"
charmander = "charyzard"

// console.log(pikachu)
// console.log(squirtle)
// console.log(charmander);