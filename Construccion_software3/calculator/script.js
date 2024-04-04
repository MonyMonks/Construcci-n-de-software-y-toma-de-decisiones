let fullOperation = '';
let result = '';
let prevCalculation=[];

function pressButton(number) {
  console.log('hello world' + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/|\^)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case '+':
      fullOperation = adding(number1, number2);
      break;
    default:
      break;
  }


  switch (operador) {
    case '-':
      fullOperation = substraction(number1, number2);
      break;
    default:
      break;
  }

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    default:
      break;
  }

  switch (operador) {
    case '/':
      fullOperation = division(number1, number2);
      break;
    default:
      break;
  }

  switch (operador) {
    case '^':
      fullOperation = Math.pow(number1, number2);
      break;
    default:
      break;
  }

  showNumber(operador);
}

function ClearScreen() {
  prevCalculation.push("Previous calculations"+fullOperation);
  console.log(prevCalculation)
 fullOperation='';
 showNumber();
}

function prevResults(){
  const container=document.getElementById('data-container');
  container.innerHTML=prevCalculation.map((value)=> {
    return '<div>'+value+'<div>';
  }).join('');
}


function adding(number1,number2) {
  return number1+number2;
}

function substraction(number1,number2){
  return number1-number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function division(number1, number2) {
  return number1 / number2;
}

function power(number1, number2) {
  return number1 ^ number2;
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}

showNumber();
