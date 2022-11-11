// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

const checkNr = function (nr1, nr2) {
  if ((nr1 >= 50 && nr1 <= 90) || (nr2 >= 50 && nr2 <= 90)) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNr(52, 45));
console.log(checkNr(30, 60));
console.log(checkNr(15, 45));
