let isCalculated = false; 

function appendCharacter(char) {
    let display = document.getElementById('display');
    
    if (isCalculated) {
        display.innerText = '';
        isCalculated = false; 
    }
    
    if (display.innerText === '0') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.innerText = '0';
}

function deleteChar() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function calculate() {
    let history = document.getElementById('history');
    let display = document.getElementById('display');
    let expression = display.innerText;

    if (!expression || expression === '') {
        return;
    }

    const operators = ['+', '-', '*', '/'];
    if (operators.includes(expression.slice(-1))) {
        return;
    }

    let result = eval(expression);

    if (typeof result === 'number' && !Number.isInteger(result)) {
        result = parseFloat(result.toFixed(10));
    }

    display.textContent = result;
    history.innerHTML += expression + ' = ' + result + '<br>';
    display.innerText = result;

    isCalculated = true;

    history.scrollTop = history.scrollHeight;
}

function appendOperator(operator) {
    let currentText = display.textContent.trim();

    isCalculated = false;
    
    if (!currentText || currentText.length === 0) {
        return;
    }

    let lastChar = currentText.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar)) {
        display.textContent = currentText.slice(0, -1) + operator;
        return;
    }

    display.textContent += operator;
}