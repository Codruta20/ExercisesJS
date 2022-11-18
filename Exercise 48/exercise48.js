// 48. Write a JavaScript program to reverse a given string.

const reverseStr = function (string) {
  const newStr = [...string].reverse().join('');
  return newStr;
};

console.log(reverseStr('elephant'));
