// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

const check = function (a, b) {
  const sum = a + b;
  const diff = a - b;

  if (a == 8 || b == 8 || sum == 8 || diff == 8) {
    return true;
  } else {
    return false;
  }
};

console.log(check(8, 5));
console.log(check(7, 8));
console.log(check(4, 4));
console.log(check(12, 4));
console.log(check(7, 10));
