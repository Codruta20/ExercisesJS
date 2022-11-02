// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : °F = (°C × 9/5) + 32, °C = (°F − 32) x 5/9 [ where C = temperature in Celsius and F = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

const tempToF = function (temperatureC) {
  let convC = (temperatureC * 9) / 5 + 32;
  console.log(`${temperatureC}°C is ${convC}°F`);
};

const tempToC = function (temperatureF) {
  let convF = ((temperatureF - 32) * 5) / 9;
  console.log(`${temperatureF}°F is ${convF}°C`);
};

tempToF(20);
tempToC(68);