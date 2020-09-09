console.log('Hellooooooooo');

let parkedCars = [];
const maxCars = 5;

function parkCar (car=null, color=null) {

  if (parkedCars.length < maxCars) {
    parkedCars.push([car, color]);
    return true;
  }
  else {
    return false;
  }
}

console.log('Lets park some cars!');
console.log(parkCar('honda civic', 'white')); //returns true
console.log(parkCar('toyota corolla', 'gold')); //returns true
console.log(parkCar('audi tt', 'green')); //returns true
console.log(parkCar('ford f150', 'red')); //returns true
console.log(parkCar('ferrari', 'blue')); //returns true
console.log(parkCar('lambo', 'black')); //returns false, garage full

function isParkedHere (car='nondescript', color='invisible') {

  for (let i = 0; i < parkedCars.length; i++) {

    if (parkedCars[i].includes(car) && parkedCars[i].includes(color)) { //if both parameters are used
      return true;
    }
    else if (parkedCars[i].includes(car) && !color) { //if no color is specified
      return true;
    }
    else if (parkedCars[i].includes(color) && !car) { //if no car is specified
      return true;
    }
  }
  return false;
}

console.log('Lets see whats in the garage!');
console.log(isParkedHere('ferrari')); //returns true
console.log(isParkedHere('gold')); //returns true
console.log(isParkedHere('lambo')); //returns false
console.log(isParkedHere('grey')); //returns false
console.log(isParkedHere('audi tt', 'green')); //returns true
console.log(isParkedHere('audi tt', 'red')); //returns false

function takeForASpin (car=null, color=null) {

  let carIndex = null;
  let vehicle = '';

  let isPresent = isParkedHere(car, color);

  if (isPresent) {
    carIndex = isParkedIn(car, color);
    vehicle = parkedCars[carIndex][1] + ' ' + parkedCars[carIndex][0];
    parkedCars.splice(carIndex, 1);
    return `Have fun driving your ${vehicle}!`;
  }
  else {
    return false;
  }
}

console.log('Joy ride time!');
console.log(takeForASpin('audi tt')); //true
console.log(takeForASpin('gold')); //true
console.log(takeForASpin('grey')); //false
console.log(takeForASpin('lambo')); //false
console.log(takeForASpin('ferrari', 'blue')); //true
console.log(takeForASpin('ferrari', 'red')); //false
console.log(takeForASpin('lambo', 'grey')); //false
console.log(takeForASpin('lambo', 'gold')); //false

//Added this function to make checking for index in takeForASpin cleaner.
function isParkedIn (car=null, color=null) {

  for (let i = 0; i < parkedCars.length; i++) {

    if (parkedCars[i].includes(car) && parkedCars[i].includes(color)) { //if both parameters are used
      return i;
    }
    else if (parkedCars[i].includes(car) && !color) { //if no color is specified
      return i;
    }
    else if (parkedCars[i].includes(color) && !car) { //if no car is specified
      return i;
    }
  }
  return null;
}
