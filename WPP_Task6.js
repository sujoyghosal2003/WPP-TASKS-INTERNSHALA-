function isMultipleOf3Or7(number) {
    if (number <= 0) {
        return "Please enter a positive number";
    }

    if (number % 3 === 0 || number % 7 === 0) {
        return `${number} is a multiple of 3 or 7.`;
    } else {
        return `${number} is not a multiple of 3 or 7.`;
    }
}

// Example usage:
const number = 21;
const result = isMultipleOf3Or7(number);

console.log(result);
