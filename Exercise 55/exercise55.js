// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.

function check(string) {
  let countP = 0;
  let countT = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == 'p') {
      countP += 1;
    } else if (string[i].toLowerCase() == 't') {
      countT += 1;
    }
  }
  return countP == countT;
}

console.log(check('pPtT'));
console.log(check('ppptt'));
