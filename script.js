// Variables for num1, operator, num2 to display on calc
let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "";

function addNumbers() {
    let answer = Number(num1) + Number(num2);
    let checkDecimal = (answer - Math.floor(answer)) !== 0;
    if (checkDecimal) {
        answer = answer.toFixed(2);
    }
    if (answer > 999999.99) {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = "ERROR";
    } else {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = answer;
        num1 = 0;
        num2 = 0;
        displayValue = answer;
        return answer;
    }
}

function subtractNumbers() {
    let answer = Number(num1) - Number(num2);
    let checkDecimal = (answer - Math.floor(answer)) !== 0;
    if (checkDecimal) {
        answer = answer.toFixed(2);
    }
    if (answer > 999999.99) {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = "ERROR";
    } else {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = answer;
        num1 = 0;
        num2 = 0;
        displayValue = answer;
        return answer;
    }
}

function multiplyNumbers() {
    let answer = Number(num1) * Number(num2);
    let checkDecimal = (answer - Math.floor(answer)) !== 0;
    if (checkDecimal) {
        answer = answer.toFixed(2);
    }
    if (answer > 999999.99) {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = "ERROR";
    } else {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = answer;
        num1 = 0;
        num2 = 0;
        displayValue = answer;
        return answer;
    }
}

function divideNumbers() {
    if (num2 === "0") {
        let displayDiv = document.getElementById('display');
        displayDiv.innerHTML = "ERROR";
    } else {
        let answer = Number(num1) / Number(num2);
        let checkDecimal = (answer - Math.floor(answer)) !== 0;
        if (checkDecimal) {
            answer = answer.toFixed(2);
        }
        if (answer > 999999.99) {
            let displayDiv = document.getElementById('display');
            displayDiv.innerHTML = "ERROR";
        } else {
            let displayDiv = document.getElementById('display');
            displayDiv.innerHTML = answer;
            num1 = 0;
            num2 = 0;
            displayValue = answer;
            return answer;
        }
    }
}

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

function numberEntered(button) {
    let buttonValue = button.innerHTML;
    displayValue += buttonValue;
    displayValue = displayValue.substring(0, 9)

    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = displayValue;
}

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

function backspaceButton() {
    displayValue = displayValue.slice(0, -1);
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML = displayValue;
}

// Keyboard Support
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numberIds = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
document.addEventListener('keydown', (e) => {
    if (e.key === numberKeys[e.key]) {
        document.getElementById(numberIds[e.key]).click();
    } else if (e.key === "+") {
        document.getElementById("add").click();
    } else if (e.key === "-") {
        document.getElementById("minus").click();
    } else if (e.key === "*") {
        document.getElementById("multiply").click();
    } else if (e.key === "/") {
        document.getElementById("divide").click();
    } else if (e.key === "Enter" || e.key === "=") {
        document.getElementById("equals").click();
    } else if (e.key === "Backspace" || e.key === "Delete") {
        document.getElementById("backspace").click();
    } else if (e.key === ".") {
        document.getElementById("decimal").click();
    } else if (e.key === "c" || e.key === "C") {
        document.getElementById("clear").click();
    }
})


// Make it look nice with css.
 
