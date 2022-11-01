// 9. Write a JavaScript program to calculate days left until next Christmas.

let currentDate = new Date();
let currentTime = currentDate.getTime();
let currentYear = currentDate.getFullYear();

let christmasDate = new Date(currentYear, 12 - 1, 25);
let christmasTime = christmasDate.getTime();

let minute = 1000 * 60;
let hour = minute * 60;
let day = hour * 24;

let daysChristmas = Math.ceil((christmasTime - currentTime) / day);

console.log(daysChristmas);
