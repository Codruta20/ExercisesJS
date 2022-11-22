// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

const createNewStr = function (string, nr) {
  if (nr > 0) {
    return string.repeat(nr);
  } else {
    return false;
  }
};

console.log(createNewStr('cat', 2));
console.log(createNewStr('dog', 0));
