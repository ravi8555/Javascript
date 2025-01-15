// Write a function which can convert the time input given in 12 hours format to 24 hours format
function convertTo24HourFormat(time12Hour) {
    // Split the input time into components (e.g., "10:30 PM" → ["10:30", "PM"])
    const [time, modifier] = time12Hour.split(' ');
    
    // Split the time part into hours and minutes (e.g., "10:30" → ["10", "30"])
    let [hours, minutes] = time.split(':').map(Number);
    
    // Convert hours to 24-hour format
    if (modifier === 'PM' && hours !== 12) {
        hours += 12; // Add 12 to the hour for PM, except for 12 PM
    } else if (modifier === 'AM' && hours === 12) {
        hours = 0; // Convert 12 AM to 0
    }

    // Return the time in 24-hour format (pad single-digit hours with a leading 0 if needed)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function convertTo24HrsFormat1(time) {
    // Extract the hour, minute, and period (AM/PM) from the time string
    const period = time.slice(-2);
    let [hours, minutes] = time.slice(0, -2).split(':');

    // Convert hours to number
    hours = parseInt(hours, 10);

    // Convert the hour component to 24-hour format
    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    // Format the hour component to have two digits
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.padStart(2, '0');

    // Concatenate the converted hour component, a colon, and the minute component
    return `${hoursStr}:${minutesStr}`;
}

// Example usage
console.log(convertTo24HrsFormat1("10:30PM")); // Output: "22:30"
console.log(convertTo24HrsFormat1("12:10AM"));

console.log(convertTo24HourFormat("12:10 AM"));
console.log(convertTo24HourFormat("12:45AM")); // Output: "00:45"
console.log(convertTo24HourFormat("12:00 PM")); // Output: "12:00"
console.log(convertTo24HourFormat("1:05 AM"));  // Output: "01:05"


