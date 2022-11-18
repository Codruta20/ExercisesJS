// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.

const capitalizeLetter = function (string) {
  const newStr = string.replace(
    string.slice(0, 1),
    string.slice(0, 1).toUpperCase()
  );
  return newStr;
};

console.log(capitalizeLetter('elephant'));
