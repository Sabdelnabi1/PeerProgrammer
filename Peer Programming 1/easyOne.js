// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//  Odd Numbers: [7, 11, 15]
// let numbers = [2, 5, 8, 9, 15, 21]



function splitOddAndEven(numbers) {
    // filter out the odd numbers
    const odd = numbers.filter((number) => number % 2 === 1);

    // filter out the even numbers
    const even = numbers.filter((number) => number % 2 === 0);

    // create an object with the odd and even array in it
    const returnObject = {
        odd,
        even,
    };

    return returnObject;
}

console.log(splitOddAndEven([2, 4, 7, 11, 15, 16]));


