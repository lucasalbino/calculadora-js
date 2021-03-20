// Definição de variáveis

const calc = {
    history: document.querySelector('#historico'),
    display: document.querySelector('#resultado'),
};

let toHistory = '';
let result;

// Eventos de inclusão numérica

document.getElementById('zeroButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 0;
        } else {
            calc.display.innerText += 0;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('oneButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 1;
        } else {
            calc.display.innerText += 1;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('twoButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 2;
        } else {
            calc.display.innerText += 2;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('threeButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 3;
        } else {
            calc.display.innerText += 3;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('fourButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 4;
        } else {
            calc.display.innerText += 4;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('fiveButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 5;
        } else {
            calc.display.innerText += 5;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('sixButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 6;
        } else {
            calc.display.innerText += 6;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('sevenButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 7;
        } else {
            calc.display.innerText += 7;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('eightButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 8;
        } else {
            calc.display.innerText += 8;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

document.getElementById('nineButton').onclick = function () {
    if (calc.display.innerText.length < 8) {
        if (calc.display.innerText == '0') {
            calc.display.innerText = 9;
        } else {
            calc.display.innerText += 9;
        }
    } else {
        calc.history.innerText = 'Limite: 8 algarismos';
    }
};

// Operações matemáticas

// Porcentagem

document.getElementById('percent').onclick = function () {
    let value = calc.display.innerText;
    let percent = value / 100;
    toHistory += calc.display.innerText;
    toHistory += ' % ';
    calc.display.innerText = percent;
};

// Somar
document.getElementById('sumButton').onclick = function () {
    toHistory += calc.display.innerText;
    toHistory += ' + ';
    calc.display.innerText = '';
    separaNumeros(calc.history.innerText);
    calc.history.innerText = toHistory;
};

// Subtrair
document.getElementById('subtractButton').onclick = function () {
    toHistory += calc.display.innerText;
    toHistory += ' - ';
    calc.display.innerText = '';
    separaNumeros(calc.history.innerText);
    calc.history.innerText = toHistory;
};

// Multiplicar
document.getElementById('multiplyButton').onclick = function () {
    toHistory += calc.display.innerText;
    toHistory += ' * ';
    calc.display.innerText = '';
    separaNumeros(calc.history.innerText);
    calc.history.innerText = toHistory;
};

// Dividir
document.getElementById('divideButton').onclick = function () {
    toHistory += calc.display.innerText;
    toHistory += ' / ';
    calc.display.innerText = '';
    separaNumeros(calc.history.innerText);
    calc.history.innerText = toHistory;
};

// Resultado
document.getElementById('resultButton').onclick = function () {
    toHistory += calc.display.innerText;
    calc.history.innerText = toHistory;
    result = solveExpression(toHistory);

    calc.display.innerText = result;
    toHistory = '';
};

// Botão C
document.getElementById('cButton').onclick = function () {
    let temporaryDisplay = calc.display.innerText;
    temporaryDisplay = temporaryDisplay.substring(0, temporaryDisplay.length - 1);

    calc.display.innerText = temporaryDisplay;

    if (calc.history.innerText == 'Limite: 8 algarismos') {
        calc.history.innerText = '';
    }
};

// Botão AC
document.getElementById('acButton').onclick = function () {
    calc.display.innerText = '0';
    toHistory = '';
    calc.history.innerText = '';
};

// Alterador de sinal
document.getElementById('positiveNegative').onclick = function () {
    calc.display.innerText *= -1;
};

// Separar casa decimal
document.getElementById('dotButton').onclick = function () {
    if (calc.display.innerText[calc.display.innerText.length - 1] != '.') {
        calc.display.innerText += '.';
    }
};

// Função para cálculo da expressão

function solveExpression(expression) {
    var dividedNumbers = [];
    var dividedOperators = [];

    // Eliminando espaços da expressão
    expression = expression.split(' ').join('');

    // Separando números e operadores
    for (var i = 0; i < expression.length; i++) {
        if (expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/') {
            dividedNumbers.push(expression.slice(0, i));
            dividedOperators.push(expression[i]);
            expression = expression.slice(i + 1, expression.length);
            i = 0;
        }
    }

    dividedNumbers.push(expression);

    // Começando os cálculos
    var temporaryResult = parseFloat(dividedNumbers[0]);
    dividedNumbers.splice(0, 1);

    // Calculando conforme separação anterior
    for (var i = 0; i < dividedOperators.length; i++) {
        if (dividedOperators[i] == '+') {
            temporaryResult += parseFloat(dividedNumbers[0]);
            dividedNumbers.splice(0, 1);
        }

        if (dividedOperators[i] == '-') {
            temporaryResult -= parseFloat(dividedNumbers[0]);
            dividedNumbers.splice(0, 1);
        }

        if (dividedOperators[i] == '*') {
            temporaryResult *= parseFloat(dividedNumbers[0]);
            dividedNumbers.splice(0, 1);
        }

        if (dividedOperators[i] == '/') {
            temporaryResult /= parseFloat(dividedNumbers[0]);
            dividedNumbers.splice(0, 1);
        }
    }

    // Tratativa para operações com casas após a vírgula
    if (temporaryResult / temporaryResult.toFixed(0) == 1) {
        return temporaryResult.toFixed(0);
    } else {
        return temporaryResult.toFixed(2);
    }
}

function separaNumeros(historico) {
    let numeros = [];
    let operadores = [];

    historico = historico.split(' ').join('');

    for (let i = 0; i < historico.length; i++) {
        if (historico[i] == '+' || historico[i] == '-' || historico[i] == '*' || historico[i] == '/') {
            numeros.push(historico.slice(0, i));
            operadores.push(historico[i]);
            historico = historico.slice(i + 1, historico.length);
            i = 0;
        }
    }

    for (let i = 0; i < operadores.length; i++) {
        if (operadores[i] == '+') {
            return calc.history.innerText = toHistory + calc.display.innerText;
        }
        if (operadores[i] == '-') {
            return calc.history.innerText = toHistory + calc.display.innerText;
        }
        if (operadores[i] == '*') {
            return calc.history.innerText = toHistory + calc.display.innerText;
        }
        if (operadores[i] == '/') {
            return calc.history.innerText = toHistory + calc.display.innerText;
        }
    }
}
