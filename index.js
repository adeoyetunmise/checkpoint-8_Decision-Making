// Leap Year Checker
function isLeapYear(year) {
    // Check if the year is divisible by 400
    if (year % 400 === 0) {
        return true;
    }
    // Check if the year is divisible by 100 but not by 400
    if (year % 100 === 0) {
        return false;
    }
    // Check if the year is divisible by 4 but not by 100
    if (year % 4 === 0) {
        return true;
    }
    // If none of the above conditions are met, it is not a leap year
    return false;
}

// Example usage:
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(2023)); // Output: false

// Ticket Pricing

function ticketPricing(age) {
    if(age<=12){
        return 'your ticket price is $10'
    }

    if (age >=13 && age <= 17){
        return 'your ticket price is $15'
    }

    if (age <= 18){
        return 'your ticket price is $20'
    }
    return 'You are not eligible'
}

console.log(ticketPricing(5));
console.log(ticketPricing(13));
console.log(ticketPricing(19));
console.log(ticketPricing(4));
console.log(ticketPricing(20));

// Fibonacci Sequence
function fibonacci(n) {
    // Base case: return n if n is 0 or 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive case: return the sum of the two preceding numbers
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55

// Palindrome Checker
function isPalindrome(str) {
    // Helper function to preprocess the string
    function preprocess(s) {
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    // Base case: if the string is empty or has one character, it's a palindrome
    function checkPalindrome(s) {
        if (s.length <= 1) {
            return true;
        }
        // Compare first and last characters
        if (s[0] !== s[s.length - 1]) {
            return false;
        }
        // Recursive case: check the substring without the first and last characters
        return checkPalindrome(s.slice(1, -1));
    }

    const cleanedString = preprocess(str);
    return checkPalindrome(cleanedString);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false
