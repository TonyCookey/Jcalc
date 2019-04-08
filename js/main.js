function calc() {
  var operand1 = parseInt(document.querySelector("#operand1").value);
  var operand2 = parseInt(document.querySelector("#operand2").value);
  var operator = document.querySelector("#selector").value;
  var calculate;

  if (operator == 'add') {
    calculate = operand1 + operand2;
  }
  else if (operator == 'min') {
    calculate = operand1 - operand2;
  }
  else if (operator == 'mul') {
    calculate = operand1 * operand2;
  }
  else if (operator == 'div') {
    calculate = operand1 / operand2;
  }
  else if (operator == 'mod') {
    calculate = operand1 % operand2;
  }
document.querySelector("#out").innerHTML = calculate
}
