// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

const removeCharacter = function (word, positionRemove) {
  return word.replace(word.slice(positionRemove, positionRemove + 1), '');
};

console.log(removeCharacter('elephant', 1));
console.log(removeCharacter('garden', 3));