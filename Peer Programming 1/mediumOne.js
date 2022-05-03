// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

function vowelCheck(input) {
    if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u") {
        console.log("This is a vowel");
    } else {
        console.log("This is not a vowel");
    }
}
vowelCheck("f")