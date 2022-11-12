// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

const findNr = function (nr1, nr2) {
  if (nr1 >= 40 && nr1 <= 60 && nr2 >= 40 && nr2 <= 60) {
    return Math.max(nr1, nr2);
  } else {
    return false;
  }
};

console.log(findNr(55, 45));
console.log(findNr(42, 18));
