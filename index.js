// 1
let a = 5;
let b = 10;
console.log(a * b);

// 2
let c = 10;
let d = 2;
console.log(c / d);

//3
let num = 1;
num++; // 2
console.log(num);
num--; // 1
console.log(num);
num+= 22; // 23
console.log(num);
num*= 33; // 759
console.log(num);
num/= 44; // 17.25
console.log(num);
num-= 55; // 37.75
console.log(num);

//4
let num1 = 1;
++num1; // 2
console.log(num1);
--num1; // 1
console.log(num1);
num1+= 22; // 23
console.log(num1);
num1*= 33; // 759
console.log(num1);
num1/= 44; // 17.25
console.log(num1);
num1-= 55; // 37.75
console.log(num1);

// function sayCoolWeather() {
//     alert('Сегодня отличный день')
// }
// sayCoolWeather()

// let userName = null;
// if(true) {
//     userName= 'John';
// }
// console.log(userName)

// function sayHello() {
//     let userName = 'Аноним';
//     console.log('Привет, ' + userName)
//     return 5;
// }
// let resultOfFunction = sayHello();
// console.log('Result of functionion word is ' + resultOfFunction);

//Function declaration
function getSumOfTwoNumber(num1, num2) {
    let result = num1 + num2;
    return result;
}
let resultOfFunction = getSumOfTwoNumber(2, 5);
 console.log('Result of functionion word is ' + resultOfFunction);

 //function getSumOfTwoNumber(num1, num2 = 1) {
//     let result = num1 + num2;
//     return result;
// }
// let resultOfFunction = getSumOfTwoNumber(2);
//  console.log('Result of functionion word is ' + resultOfFunction);

function getMultiOfTwoNumber(num1, num2) {
    let result = num1 * num2;
    return result;
}
let resultOfFunction1 = getMultiOfTwoNumber(2, 5);
 console.log('Result of functionion word is ' + resultOfFunction1);

 //Functin expression
 let getDivide = function (num3,num4) {
    return num3/num4;
 }
getDivide(4, 2);

//Arrow function

let getSquare = x => x*x;
console.log(getSquare(6));


// Tasks

function getNumber (num5, num6) {
    if (num5 > num6) {
        return num5
    } else {
        return num6
    }

} 
let resultNumber = getNumber(5,6)
console.log(resultNumber);

// Task 

function isEven (num7) {
    if (num7 % 2 == 0) {
        return true
    }  
    return false
}

// Task
function calculate() {
let num1 = Number(prompt('Введите первое число'));
let num2 =Number(prompt('Введите второе число'));
let action = prompt('Какое действие вы хотите выполнить: умножение, деление, сложение или вычисление? Введие символ');

let result = null;

if (action === '*'){
    result = multy(num1, num2);
} else if (action === '/') {
    result = div(num1, num2);
} else if (action ==='+') {
    result = sum(num1, num2);
} else if (action === '-') {
    result =  sub(num1, num2)
} else {
    alert('Error');
    return
}
alert('Result = ' + result);
}

function multy(num1, num2) {
        return num1 * num2;  
    } 
function div(num1, num2) {
        return num1 / num2;
    }
function sum(num1, num2) {
        return num1 + num2;
    }
function sub(num1, num2) {
        return num1 - num2;
    } 
    calculate()

