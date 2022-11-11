// 31. Write a JavaScript program to find the largest of three given integers.

const checkMax = function (nr1, nr2, nr3) {
  const max = Math.max(nr1, nr2, nr3);
  return max;
};

console.log(checkMax(4, 12, 15));
console.log(checkMax(89, 16, 32));
