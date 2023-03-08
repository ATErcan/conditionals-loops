// a. Write a JavaScript program that accepts two integers 
// and displays the larger of the two.
const findLarger = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(findLarger(5, 3));
console.log(findLarger(12, 20));


// Write a JavaScript program that checks whether an integer
// is an even or an odd number.
const evenOrOdd = num => num % 2 ? `${num} is odd` : `${num} is even`;

console.log(evenOrOdd(5));
console.log(evenOrOdd(8));

