// Variables for num1, operator, num2 to display on calc
num1 = 0;
num2 = 0;
operator = 0;

// Functions for add, subtract, divide, multiply
function addNumbers (num1, num2) {
    return num1 + num2;
}

function subtractNumbers (num1, num2) {
    return num1 - num2;
}

function multiplyNumbers (num1, num2) {
    return num1 * num2;
}

function divideNumbers (num1, num2) {
    return num1 / num2;
}


// Function called operate that takes an operator, the two numbers and calls the relevant function
function operate (operator, num1, num2) {
    switch (operator) {
        case "+":
            return addNumbers(num1, num2);
            break;
        case "-":
            return subtractNumbers(num1, num2);
            break;
        case "*":
            return multiplyNumbers(num1, num2);
            break;
        case "/":
            return divideNumbers(num1, num2);
            break;
    }
}

console.log(operate("-",5,3))


// Create HTML calc with each digit, the operators and an equals. Also create a display for the calc (fill with dummy numbers), Also add a clear button.
// Functions that populate display with numbers entered. Store “display value” in a variable.
// Once operate has been called, update the display with the solution.

/* Bugs to watch out for
- 12 + 7 - 5 * 3 should equal 42, each two numbers should be calculated before the next one.
- You press 12 + 7 -, this should calculate 12 + 7 and then display 19 and then take 19 as the first number and - as the operator waiting for a 2nd number.
- round long decimals so they fit on display
- equals before numbers and operators will cause error
- clear should wipe all data and start fresh
- display error message if user tries to divide by 0 and stop app from crashing */

// Make it look nice with css, add a backspace to gui and add keyboard support.
 