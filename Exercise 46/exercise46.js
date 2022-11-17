// 46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

const check = function (nr1, nr2) {
  if (nr1 > 0 && nr2 > 0) {
    if (nr1 % 7 == 0 || nr1 % 11 == 0 || nr2 % 7 == 0 || nr2 % 11 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(check(14, 15));
console.log(check(121, 185));
console.log(check(45, 42));
console.log(check(49, 11));
console.log(check(-45, 18));
