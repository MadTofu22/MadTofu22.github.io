// REQUIRED FEATURES

// 1. Create a variable with a value of an array with the following (number) values: 3, 6, 7, 10
const arrOne = [3, 6, 7, 10];

// 2. Create a variable called 'myValue' with a value of the number 0
let myValue = 0;

// 3. Console log the value of the array at index 2
console.log(arrOne[1]);

// 4. Remove the last item in the array, then console log the array
arrOne.pop();
console.log(arrOne);

// 5. Add the value of number 15 to the end of the array
arrOne.push(15);

// 6. Write a `for` loop that console logs each value in the array
for (let i = 0; i < arrOne.length; i++) {
  console.log(arrOne[i]);
}
//Alternate answer to problem 6. I left this commented out since it doesn't fall under writing a for loop.
//arrOne.forEach(num => {console.log(num);});

// STRETCH GOALS

// 7. Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10
while (myValue < 10) {
  myValue++;
}

// 8. Change the second value in the array from 6 to 20, then console log the array
arrOne[1] = 20;
console.log(arrOne);

// 9. Below, rewrite the `for` loop from question 6 to a `for of` loop
for (let num of arrOne) {
  console.log(num);
}

// 10. Reassign `myValue` to 3. Then, loop through your array, logging the value
//     of each array item. If any item matches `myValue`, then also log "Hurray!"
myValue = 3;
arrOne.forEach(x => {
  if (x === myValue) {
    console.log("Hurray!");
  }
});

let testBool = null;
if (!testBool) {
  console.log("this output means null reads falsy cause its negated");
}
else {
  console.log("this output means null reads falsy");
}

console.log(testBool);
