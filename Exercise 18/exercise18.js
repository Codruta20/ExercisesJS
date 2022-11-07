// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const check = function (nr1, nr2) {
  let sum = nr1 + nr2;
  let result = nr1 == 50 || nr2 == 50 || sum == 50;
  return result;
};

console.log(check(10, 40));
console.log(check(15, 12));
