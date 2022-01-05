const add = function (x,y) {
    return x+y;
}

const subtract = function (x,y) {
    return x-y;
}

const multiply = function (x,y) {
    return x*y; 
}

const divide = function (x,y) {
    return x/y; 
}

const operate = function (num1, num2, operator) {
    if (operator == "+"){
        add(num1,num2);
    } 
    else if (operator == "-"){
        subtract(num1,num2);
    } 
    else if (operator == "*"){
        multiply(num1,num2);
    } 
    else if (operator == "/"){
        divide(num1,num2);
    }
}

const numbers = document.querySelectorAll('.num-btn');
const screen = document.querySelector('.display');
const period = document.querySelector('.period');
const operators = document.querySelectorAll('.operator');
let displayValue="";
let operatorValue="";


const clearDisplay = function() {
    screen.textContent = "";
}

const displayOperator = function() {
    screen.textContent = screen.textContent + this.textContent;
    
}

const displayNum = function(e) {
    if (screen.textContent=="0"){
        screen.textContent="";
    }
    screen.textContent = screen.textContent + this.textContent; 
    displayValue = screen.textContent;
    
    }

//BELOW WAS IN ABOVE FUNCTION

//     period.addEventListener('click', function() {
//         screen.textContent = screen.textContent + this.textContent
//     }, {once : true});
    
//     operators.addEventListener('click', function() {
//         screen.textContent = screen.textContent + this.textContent
//         operatorValue = this.textContent;
//         console.log(operatorValue);
//     }, {once : true});

//    operators.forEach(operator=>operator.addEventListener('click', function() {
//         screen.textContent = screen.textContent + this.textContent
//     },{once : true}));
    
//     
    
// period.addEventListener('click', function() {
//     screen.textContent = screen.textContent + this.textContent
// }, {once : true});

// operators.addEventListener('click', function() {
//     screen.textContent = screen.textContent + this.textContent
// }, {once : true});
    



numbers.forEach(number => number.addEventListener('click', displayNum));
operators.forEach(operator=>operator.addEventListener('click', displayOperator)); 
         
console.log(displayValue);

for (let i=0; i<screen.textContent.length; i++){
    if (screen.textContent.charAt(i)=="+") {
        console.log(displayValue);
        operators.forEach(operator=>operator.removeEventListener('click', displayOperator))
    }
}

// period.addEventListener('click', function() {
//     screen.textContent = screen.textContent + this.textContent
// }, {once : true});


// add event listener for every key

// if the click was a number --- keep listening for a number (up to 10 numbers)
// if the click was a decimal ---- stop listening for decimals, but continue listening for numbers (up to 10)
// if the click was an operator --- store numbers before the operator and store operator