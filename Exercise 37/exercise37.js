// 37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

const newStr = function (str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.slice(0, 3).toLowerCase();
  }
};

console.log(newStr('Flower'));
console.log(newStr('hh'));
