const display = document.getElementById('display');
let expression = '';

function append(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        // Replace Math.pow( with Math.pow(
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (e) {
        display.value = 'Error';
        expression = '';
    }
}
