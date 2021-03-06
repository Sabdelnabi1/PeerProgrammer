// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two
// numbers without a remainder.  
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

function commonDenom(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(commonDenom(12, 9));
console.log(commonDenom(20, 5));

