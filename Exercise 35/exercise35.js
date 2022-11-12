// 35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

const checkCharacter = function (string, character) {
  const check = [...string.slice(1, 4)].includes(character);
  return check;
};

console.log(checkCharacter('Elephant', 'e'));
console.log(checkCharacter('Elephant', 'r'));
