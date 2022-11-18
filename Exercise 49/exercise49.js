// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const replaceCharacters = function (string) {
  const newStr = [];
  [...string].map((chr) => {
    let char = String.fromCharCode(chr.charCodeAt(0) + 1);
    newStr.push(char);
  });
  return newStr.join('');
};

console.log(replaceCharacters('cat'));
