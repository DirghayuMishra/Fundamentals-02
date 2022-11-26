"use strict"; // this activates strict mode
//strict mode is a special feature that helps us to write secure code in JS
// always use the strict mode before the beginning of a code
// strict mode helps us to avoid bringing the bugs into our system
// strict mode forbids as well as use some functions

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // here i yhave made an error on purpose by missing the letter 's' after Driver
if (hasDriversLicense) console.log("I can Drive XDDD");

// error message pops up while using the strict mode which lets me to find the bug in my code
// if i donot use strict mode here the console doesnot show any error not it gives me any results

// const interface = " audio"; ----- JS doesnot let me use this because the word interface have been booked to perform a specific function in the future. Thus reserved words cannot be used while using strict mode
// const private = 534 -0------ private is also a reserved word
// const if = 23 ----- error pops up because if cannot be used as a variable
