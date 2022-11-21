// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

const check = function (string) {
  const diff = [...string].indexOf('b') - ([...string].indexOf('a') + 1);
  if (diff == 3) {
    return true;
  } else {
    return false;
  }
};

console.log(check('afffbs'));
console.log(check('fradddb'));
console.log(check('elephant'));
