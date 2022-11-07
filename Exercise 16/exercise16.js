// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

const calculate = function (nr1, nr2) {
  let calc = nr1 + nr2;
  if (nr1 == nr2) {
    calc = calc * 3;
  }
  return calc;
};

console.log(calculate(5, 5));
console.log(calculate(4, 5));
