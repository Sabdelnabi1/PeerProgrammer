// Create a function that checks an array for prime numbers then inserts any pimes into a new array.
// Example 1:
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]
// // Output: primeArray = [19 ,29 ,47 , 83]
// function checkingPrime(numArray) {
//     const isPrime = numArray.filter(outputArray => {


let primeArray = [];
function isPrime(number = []) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] === 2 && number[i] != 1) {
            primeArray.push(number[i]);

        } else if (number[i] % 2 != 0 && number[i] != 1) {
            primeArray.push(number[i]);
        }
    }
}
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
isPrime(numArray);
console.log("\n");

console.log("Prime Array");
console.log(primeArray)




