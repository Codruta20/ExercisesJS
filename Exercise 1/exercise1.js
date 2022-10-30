// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let today = new Date();
let dayOfWeek = weekday[today.getDay()];

let hour = today.getHours();

let meridian;
if (hour >= 12 && hour <= 23) {
  meridian = 'PM';
} else {
  meridian = 'AM';
}

let newHour = hour >= 12 ? hour - 12 : hour;
console.log(today);
console.log(`Today is : ${dayOfWeek}`);
console.log(
  `${newHour} ${meridian} : ${today.getMinutes()} : ${today.getSeconds()}`
);
