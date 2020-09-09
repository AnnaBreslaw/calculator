let userInput = null;
let operator = '';
let num1 = null;
let num2 = null;

let calcInput = document.getElementById('calc-input')
let calcOutput = document.getElementById('calc-output')

calcInput.addEventListener('click', function (event) {
    
//TD = operators
//isolate operators by finding TD in console log
//assign variable to event target text (ie user input)

    if (event.target.tagName === 'TD'){
    userInput = event.target.innerText
    console.log(userInput)

        if (userInput === '='){
            // operate()
        }
        else {
            operator = userInput
        }
    }

    //TH = numbers

    if(event.target.tagName === 'TH'){
        userInput = event.target.innerText


        //if user hasnt selected operator, adjust num1

        if(operator === ''){
            if(!num1){
                num1 = userInput
            }
            else {
                num1 += userInput
            }
        }
        else {
            if (!num2){
                num2 = userInput
            }
            else {
                num2 += userInput
            }
        }
    }
})

let result;

function add(num1, num2){
    result = (num1 + num2)
    return result;
}

function subtract(num1, num2){
    result = (num1 - num2)
    return result;
}

function multiply(num1, num2){
    result = (num1 * num2)
    return result;
}

function divide(num1, num2){
    result = (num1 / num2)
    return result;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
        default: 
            return 'error'
    }
}