// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const calculate = function (a, b) {
  const sum = a + b;

  return sum >= 50 && sum <= 80 ? 65 : 80;
};

console.log(calculate(40, 20));
console.log(calculate(65, 42));