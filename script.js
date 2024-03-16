// Variables for num1, operator, num2 to display on calc
let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "";

// Functions for add, subtract, divide, multiply
function addNumbers() {
    let answer = Number(num1) + Number(num2);
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = answer;
    num1 = 0;
    num2 = 0;
    displayValue = answer;
    return answer;
}

function subtractNumbers() {
    let answer = Number(num1) - Number(num2);
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = answer;
    num1 = 0;
    num2 = 0;
    displayValue = answer;
    return answer;
}

function multiplyNumbers() {
    let answer = Number(num1) * Number(num2);
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = answer;
    num1 = 0;
    num2 = 0;
    displayValue = answer;
    return answer;
}

function divideNumbers() {
    let answer = Number(num1) / Number(num2);
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = answer;
    num1 = 0;
    num2 = 0;
    displayValue = answer;
    return answer;
}


// Function called operate that takes an operator, the two numbers and calls the relevant function
function operate(operator) {
    switch (operator) {
        case "+":
            return addNumbers();
            break;
        case "-":
            return subtractNumbers();
            break;
        case "*":
            return multiplyNumbers();
            break;
        case "/":
            return divideNumbers();
            break;
    }
    
}

// Functions that populate display with numbers entered. Store “display value” in a variable.
function numberEntered(button) {
    let buttonValue = button.innerHTML;
    displayValue += buttonValue;

    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = displayValue;
}

// Function when operator button is clicked.
function operatorButton(buttonOperator) {
    if(num1 === 0) {
        operator = buttonOperator;
        num1 = displayValue;
        displayValue = "";
    } else {
        num2 = displayValue;
        operate(operator);
        operator = buttonOperator;
    }
}

// Function when equal button is clicked.
function equalButton() {
    if(num1 === 0) {
        num1 = displayValue;
        displayValue = "";
    } else {
        num2 = displayValue;
        operate(operator);
    }
}

// Need to add 0 button, need to program clear and backspace buttons.

/* Bugs to watch out for
- 12 + 7 - 5 * 3 should equal 42, each two numbers should be calculated before the next one.
- You press 12 + 7 -, this should calculate 12 + 7 and then display 19 and then take 19 as the first number and - as the operator waiting for a 2nd number.
- round long decimals so they fit on display
- equals before numbers and operators will cause error
- clear should wipe all data and start fresh
- display error message if user tries to divide by 0 and stop app from crashing */

// Make it look nice with css, add a backspace to gui and add keyboard support.
 