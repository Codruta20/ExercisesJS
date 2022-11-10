// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

const changeStr = function (word) {
  if (word.length >= 1) {
    let firstCharact = word.slice(0, 1);
    let lastCharact = word.slice(-1);
    let newStr =
      word.replace(firstCharact, lastCharact).slice(0, -1) + `${firstCharact}`;
    return newStr;
  } else {
    return false;
  }
};
console.log(changeStr('Elephant'));
