// 36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.

const check = function (nr1, nr2, nr3) {
  if (nr1 > 0 && nr2 > 0 && nr3 > 0) {
    return nr1 % 10 == nr2 % 10 && nr2 % 10 == nr3 % 10;
  } else {
    return false;
  }
};

console.log(check(1600, 1480, 50));
console.log(check(148, 168, 208));
console.log(check(152, 162, 1833));
