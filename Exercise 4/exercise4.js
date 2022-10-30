// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const area = function (length1, length2, length3) {
  let s = (length1 + length2 + length3) / 2;
  return Math.sqrt(s * (s - length1) * (s - length2) * (s - length3));
};

console.log(area(5, 6, 7));
