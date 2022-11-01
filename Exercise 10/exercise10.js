// 10. Write a JavaScript program to calculate multiplication and division of two numbers.

const calculate = function (number1, number2) {
  let multiplication = number1 * number2;
  let division = number1 / number2;
  console.log(
    `Result of multiplication: ${multiplication}, Result of division: ${division}`
  );
};

calculate(15, 10);
