// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

const checkNumbers = function (nr1, nr2, nr3) {
  if (nr1 > 0 && nr2 > 0 && nr3 > 0) {
    if (nr1 % 10 == nr2 % 10 || nr1 % 10 == nr3 % 10 || nr2 % 10 == nr3 % 10) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(checkNumbers(20, 200, 50));
console.log(checkNumbers(14, 64, 95));
console.log(checkNumbers(25, 18, 65));
console.log(checkNumbers(18, 45, 66));
