function modifyString(str) {
    if (str.length < 3) {
        return "String length must be 3 or more.";
    }

    // Get the last 3 characters of the string
    let lastThreeChars = str.slice(-3);

    // Add these characters to the front and back of the string
    let modifiedString = lastThreeChars + str + lastThreeChars;

    return modifiedString;
}

// Example usage
let originalString = "SWAMINATHAN";
let result = modifyString(originalString);
console.log(result); // Output: "pleexampleple"
