$(document).ready(function() {

	var LimitTest = true;

	// Prompts user to enter a number
	// Loop repeats until user enters a real whole number
	do {
		var upperLimit = prompt("Please enter a number you want to FizzBuzz to:");

		// Converts user input to an integer
		upperLimit = +upperLimit;

		// If input is not a whole number, user is instructed to enter in a whole number
		if ( isNaN(1 / upperLimit) || upperLimit%1 != 0 ) {
			LimitTest = true;
			alert( "Please enter a real number.");
		}
		else {
			LimitTest = false;
		}

	} while (LimitTest)


	// FizzBuzz function definition
	var countToLimit = function(lim) {

		console.log("Starting FizzBuzz...");

		// FizzBuzz For Loop spitting out numbers from 1 to uppLimit
		for (var i = 1; i <= lim; i++) {

			var FizzNum = i + "<br>";

			// Evaluates number to see if it is divisible by 3 and 5
			if( i%3 == 0 && i%5 == 0) {
				$("body").append("Fizz Buzz <br>");	
			}

			// Else evaluates number to see if it is divisible by 3
			else if (i%3 == 0) {
				$("body").append("Fizz <br>");
			}

			// Else evaluates number to see if it is divisible by 5
			else if (i%5 == 0) {
				$("body").append("Buzz <br>");
			}

			// Else simply prints the number itself
			else {
				$("body").append(FizzNum);		
			}
			
		}

		console.log("FizzBuzz complete!");	
		
	}
		
	// Calling of FizzBuzz function and passing it user input value
	countToLimit(upperLimit);
});