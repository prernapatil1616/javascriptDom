
const numbers = [5, 10, 15, 20];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

document.getElementById("result").textContent = `The sum of the elements in the array is ${sum}.`;
