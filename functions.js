function talk () {
    let message = 'I have no mouth, and I must scream'
    return message
}
   
   function greeter(name, batch, instructor = "Enrique") {
    return `Hello ${name}!! Welcome to WBS Web Development course! Your batch is number ${batch}. Your instructor is ${instructor}`;
   }
   
   const square = (number) => {
    return number * number;
   }
   
   console.log(talk());
   //    talkDynamic(‘greetings’, ‘pikachu’);
   square(3); // 9
   

console.log(greeter('Jerry', 41));
console.log(greeter('Chris', 41, "Lilian"));