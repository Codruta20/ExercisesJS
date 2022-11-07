// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

const check = function (nr) {
  let difference = 13 - nr;
  if (nr > 13) {
    difference = Math.abs(2 * difference);
  }
  return difference;
};

console.log(check(10));
console.log(check(20));
