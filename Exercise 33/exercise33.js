// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const check = function (nr1, nr2) {
  const checkNr1 = (nr1 >= 40 && nr1 <= 60) || (nr1 >= 70 && nr1 <= 100);
  const checkNr2 = (nr2 >= 40 && nr2 <= 60) || (nr2 >= 70 && nr2 <= 100);
  if (checkNr1 && checkNr2) {
    return true;
  } else {
    return false;
  }
};

console.log(check(50, 70));
console.log(check(13, 15));
console.log(check(18, 92));
