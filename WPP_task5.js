function removeCharacter(str, position) {
    if (position < 0 || position >= str.length) {
        return "Invalid position";
    }
    return str.slice(0, position) + str.slice(position + 1);
}

// Example usage:
const originalString = "Hello, world!";
const positionToRemove = 7;
const modifiedString = removeCharacter(originalString, positionToRemove);

console.log(`Original String: "${originalString}"`);
console.log(`Modified String: "${modifiedString}"`);
