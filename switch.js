// https://www.w3schools.com/js/js_switch.asp
// const pokemon = 'Pikachu';

// switch (pokemon) {
//  case 'Pikachu':
//    console.log('We restored your Pikachu to full health!');
//    break;
//  case 'Squirtle':
//  case 'Magikarp':
//    console.log('We restored your water pokemon to full health!');
//    break;
//  default:
//    console.log('Sorry, we cannot heal your pokemon :(');
// }

console.log("Current day of the week using numbers: "+ new Date().getDay());
// const dayOfTheWeek = new Date().getDay();
// const dayOfTheWeek = 8;

switch (dayOfTheWeek) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log("Sorry, that is not a day of the week")
  }

  console.log(day)