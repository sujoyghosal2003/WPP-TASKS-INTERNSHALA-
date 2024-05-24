function daysUntilChristmas() {
    // Get today's date
    const today = new Date();
    
    // Get the current year
    const currentYear = today.getFullYear();
    
    // Create a date object for Christmas of the current year
    const christmas = new Date(currentYear, 11, 25); // December is month 11 (0-indexed)

    // If today is after Christmas, use Christmas of next year
    if (today > christmas) {
        christmas.setFullYear(currentYear + 1);
    }

    // Calculate the difference in milliseconds
    const diffTime = christmas - today;
    
    // Convert the difference from milliseconds to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

console.log(`There are ${daysUntilChristmas()} days left until Christmas!`);
