let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;
let memory = 0;

function appendNumber(number) {
    if (number === '0' && currentOperand === '0') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendDot() {
    if (currentOperand.includes('.')) return;
    currentOperand += '.';
    updateDisplay();
}

function chooseOperator(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
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
    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}

function calculatePercentage() {
    if (currentOperand === '') return;
    currentOperand = parseFloat(currentOperand) / 100;
    updateDisplay();
}

function calculateSquareRoot() {
    if (currentOperand === '') return;
    currentOperand = Math.sqrt(parseFloat(currentOperand));
    updateDisplay();
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    currentOperand = memory.toString();
    updateDisplay();
}

function memoryAdd() {
    memory += parseFloat(currentOperand);
    currentOperand = '';
    updateDisplay();
}

function memorySubtract() {
    memory -= parseFloat(currentOperand);
    currentOperand = '';
    updateDisplay();
}
