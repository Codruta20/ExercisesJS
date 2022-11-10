// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

const checkMultiple = function (nr) {
  if (nr % 3 == 0 || nr % 7 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(checkMultiple(14));
console.log(checkMultiple(20));
console.log(checkMultiple(15));
