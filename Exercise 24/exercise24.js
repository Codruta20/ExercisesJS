// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

const newString = function (word) {
  const firstCh = word.slice(0, 1);
  const newStr = firstCh + word + firstCh;
  return newStr;
};

console.log(newString('butterfly'));
