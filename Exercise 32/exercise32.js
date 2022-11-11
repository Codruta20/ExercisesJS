// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const findDiff = function (nr1, nr2) {
  const diff = Math.min(100 - nr1, 100 - nr2);
  if (100 - nr1 > 100 - nr2) {
    return nr2;
  } else {
    return nr1;
  }
};

console.log(findDiff(45, 60));
