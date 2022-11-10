// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

const check = function (nr1, nr2) {
  if ((nr1 > 0) & (nr2 < 0) || (nr1 < 0 && nr2 > 0)) {
    return true;
  } else {
    return false;
  }
};

console.log(check(-5, 6));
console.log(check(10, -18));
console.log(check(5, 10));
console.log(check(-8, -5));
