//Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
// second string by returning a boolean. 
// Input: String 1: So dark the con of man
// String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
//  String 2: Dogs eat ants
// Output: False

function areAnagram(string1, string2) {
    // Get lengths of both strings
    let n1 = string1.length;
    let n2 = string2.length;

    // If length of both strings is not same,
    // then they cannot be anagram
    if (n1 != n2)
        return false;

    // Sort both strings
    string1.sort();
    string2.sort()

    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (string1[i] != string2[i])
            return false;

    return true;
}

/* Driver Code*/
let string1 = ["Madonna"];
let string2 = ["Do dark t"];

// Function Call
if (areAnagram(string1, string2)) {
    console.log("The strings are anagram of each other")
}

else {
    console.log("The strings are not anagrams of each other")
}



