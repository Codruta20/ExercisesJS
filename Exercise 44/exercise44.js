// 44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

const check = function (nr1, nr2, nr3) {
  if (
    (nr1 >= 20 && (nr1 < nr2 || nr1 < nr3)) ||
    (nr2 >= 20 && (nr2 < nr1 || nr2 < nr3)) ||
    (nr3 >= 20 && (nr3 < nr1 || nr3 < nr2))
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(check(19, 18, 20));
console.log(check(21, 25, 18));
console.log(check(20, 14, 45));
