// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let calendar = function (year) {
  if (year % 400 == 0) {
    console.log('Leap year!');
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log('Leap year!');
  } else {
    console.log('Not leap year!');
  }
};

calendar(2000); // leap year
calendar(1800); // not a leap year
