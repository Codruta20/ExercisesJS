// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

const calculate = function (nr) {
  let diff = Math.abs(19 - nr);

  if (nr > 19) {
    diff = diff * 3;
  }

  return diff;
};

console.log(calculate(10));
console.log(calculate(20));
