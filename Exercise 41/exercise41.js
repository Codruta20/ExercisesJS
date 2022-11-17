// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

const check = function (nr1, nr2, nr3) {
  if (nr1 == nr2 && nr2 == nr3) {
    return 30;
  } else if (nr1 == nr2 || nr1 == nr3 || nr2 == nr3) {
    return 40;
  } else {
    return 20;
  }
};

console.log(check(5, 5, 5));
console.log(check(7, 7, 10));
console.log(check(7, 15, 7));
console.log(check(7, 12, 10));
