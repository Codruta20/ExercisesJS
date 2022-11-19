// 52. Write a JavaScript program to sort the letters of a given string in alphabetical order.

const sort = function (string) {
  const sortedString = [...string].sort().join('');
  return sortedString;
};

console.log(sort('crocodile'));
