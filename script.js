// Variables for num1, operator, num2 to display on calc
let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "";

// Functions for add, subtract, divide, multiply
function addNumbers() {
    let answer = Number(num1) + Number(num2);
    let displayDiv = document.getElementById('display');
    answer = answer.toFixed(2);
    displayDiv.innerHTML = answer;
    num1 = 0;
    num2 = 0;
    displayValue = answer;
    return answer;
}

function subtractNumbers() {
    let answer = Number(num1) - Number(num2);
    let displayDiv = document.getElementById('display');
    answer = answer.toFixed(2);
    displayDiv.innerHTML = answer;
    num1 = 0;
    num2 = 0;
    displayValue = answer;
    return answer;
}

function multiplyNumbers() {
    let answer = Number(num1) * Number(num2);
    let displayDiv = document.getElementById('display');
    answer = answer.toFixed(2);
    displayDiv.innerHTML = answer;
    num1 = 0;
    num2 = 0;
    displayValue = answer;
    return answer;
}

function divideNumbers() {
    if (num2 === "0") {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = "ERROR";
    } else {
        let answer = Number(num1) / Number(num2);
        let displayDiv = document.getElementById('display');
        answer = answer.toFixed(2);
        displayDiv.innerHTML = answer;
        num1 = 0;
        num2 = 0;
        displayValue = answer;
        return answer;
    }
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
    displayValue = displayValue.substring(0, 9)

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
        num1 = displayValue;
        displayValue = "";
    }
}


function equalButton() {
    if (num1 === 0 && num2 === 0) {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = "ERROR";
    } else {
        num2 = displayValue;
        operate(operator);
    }
}


function clearButton() {
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = "";
    num1 = 0;
    num2 = 0;
    operator = "";
    displayValue = "";
}



// Need to program backspace buttons.
// Make it look nice with css, add a backspace to gui and add keyboard support.
 
