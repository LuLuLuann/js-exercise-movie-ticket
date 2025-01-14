// Exercise: "Movie Ticket Pricing App"

// Objective:
// Learners will create a simple app that calculates the ticket price for a movie based on the customer's age and time of the show. This exercise will help them practice using variables, if-else, elseif statements, and logical/comparison operators.

// Scenario
// Imagine you're designing a basic movie ticketing system. The app calculates the ticket price based on these rules:

// 1. Age-based pricing:
//    - Children (0–12 years): $5
//    - Teenagers (13–17 years): $7
//    - Adults (18–59 years): $10
//    - Seniors (60+ years): $6

// 2. Showtime discount:
//    - Morning shows (before 12 PM): 10% off all ticket prices.


// Steps for Learners:
// 1. Ask the user to input:
//    - Their age.
//    - The showtime (in 24-hour format, e.g., 9 for 9 AM, 14 for 2 PM).

// 2. Use `if`, `elseif`, and `else` statements to determine the base ticket price based on age.

// 3. Apply a 10% discount if the showtime is before 12 PM.

// 4. Output the final ticket price.

// Starter Code Template

// Step 1: Define variables
let age = parseInt(prompt("Enter your age:")); // Get age from user

//? PARSEINT - converts a string into an integer

let showtime = parseInt(prompt("Enter the showtime (in 24-hour format):")); // Get showtime

// Age based variables
if (age<13 && age >= 0){
    if (showtime<12){
        console.log(`Ticket price: $${(5 * .90).toFixed(2)}`)
    } else {
console.log("$5");
    }
} else if (age<18 && age>12){
    if (showtime<12){
        console.log(`Ticket price: $${(7* .90).toFixed(2)}`)} 
        else {
            console.log("Ticket price: $7");
        }
} else if (age<60 && age>18){
    if (showtime<12){
        console.log(`Ticket price: $${(10 * .90).toFixed(2)}`)
     } else {
        console.log("Ticket price: $10");
    }
} else if (age<130 && age>59){
    if (showtime<12){
        console.log(`Ticket price: $${(6 * .90).toFixed(2)}`)} 
        else {
        console.log("Ticket price: $6");
    }
}

else {
    console.log("invalid"); 
}

// Step 2: Initialize ticket price variable
let ticketPrice = 0;
Senior

// Todo: Step 3: Determine base ticket price using if-else statements

// Todo: Step 4: Apply discount for morning shows

// Todo: Step 5: Output the final price

// Expected Behavior:
// - For age 10 and showtime 9: The output should be `$4.50`.
// - For age 25 and showtime 14: The output should be `$10.00`.
// - For age 65 and showtime 11: The output should be `$5.40`.
// - For invalid age: Display "Invalid age entered."

// NOTE:  ticketPrice *= 0.9 is the same as ticketPrice = ticketPrice * 0.9