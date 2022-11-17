// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

const check = function (nr1, nr2) {
  const sum = nr1 + nr2;
  const diff = nr1 - nr2;

  if (nr1 == 15 || nr2 == 15 || sum == 15 || diff == 15) {
    return true;
  } else {
    return false;
  }
};

console.log(check(15, 20));
console.log(check(18, 15));
console.log(check(10, 5));
console.log(check(25, 10));
console.log(check(18, 75));
