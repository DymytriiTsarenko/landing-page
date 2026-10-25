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
    let result = eval(expression);     
    
    history.innerHTML += expression + ' = ' + result + '<br>';
    
    display.innerText = result;
    
    isCalculated = true; 
}
