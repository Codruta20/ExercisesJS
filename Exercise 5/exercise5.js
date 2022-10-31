// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let word = 'w3resource';
let wordArray = [...word];

for (let i = 0; i <= wordArray.length - 1; i++) {
  let last = wordArray.pop();
  wordArray.unshift(last);
  console.log(wordArray.toString());
}
