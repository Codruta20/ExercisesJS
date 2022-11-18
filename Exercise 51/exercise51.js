// 51. Write a JavaScript program to convert a given number to hours and minutes.

const convert = function (nr) {
  const minutes = nr % 60;
  const hours = Math.floor(nr / 60);
  const time = `${hours} hours ${minutes} minutes`;
  return time;
};

console.log(convert(70));
console.log(convert(150));
