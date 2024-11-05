let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (operator !== null) calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (operator === null || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    display.innerText = currentInput;
}