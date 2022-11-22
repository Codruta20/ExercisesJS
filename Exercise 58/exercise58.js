// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

const createNewStr = function (string) {
  if (string.length >= 3) {
    return string.slice(-3).repeat(4);
  } else {
    return false;
  }
};

console.log(createNewStr('elephant'));
console.log(createNewStr('ok'));
