// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.

const checkValues = function (n1, n2, n3) {
  if (
    (n1 >= 50 && n1 <= 99) ||
    (n2 >= 50 && n2 <= 99) ||
    (n3 >= 50 && n3 <= 99)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(checkValues(55, 23, 17));
console.log(checkValues(25, 76, 17));
console.log(checkValues(42, 23, 89));
console.log(checkValues(42, 23, 17));
console.log(checkValues(55, 82, 120));