// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

const game = function () {
  let nr = Math.floor(Math.random() * 10) + 1;
  let check = prompt('Guess the number!');
  if (check == nr) {
    alert('GoodWork');
  } else {
    alert('Not matched');
  }
};

game();
