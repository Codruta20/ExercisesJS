// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

const checkString = function (str) {
  const s = 'Script';
  if (str.slice(4, 4 + s.length) == s) {
    const result = str.replace(s, '');
    return result;
  } else {
    return str;
  }
};

console.log(checkString('JavaScriptC'));
console.log(checkString('Python'));
