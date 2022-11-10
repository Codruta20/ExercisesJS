// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

const newString = function (word) {
  if (word.length >= 3) {
    const lastCharact = word.slice(-3);
    const newStr = lastCharact + word + lastCharact;
    return newStr;
  } else {
    return false;
  }
};

console.log(newString('Christmas'));
console.log(newString('Ho'));
