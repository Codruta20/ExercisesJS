// 27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

const checkStr = function (str) {
  if (str.slice(0, 4) == 'Java') {
    return true;
  } else {
    return false;
  }
};

console.log(checkStr('Javascript'));
console.log(checkStr('Python'));
