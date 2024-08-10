const convertToCelsius = function(tempF) {
  const celsius = (tempF - 32) * 5/9;
  const result = Math.round(celsius * 10) / 10;
  return result;
};

const convertToFahrenheit = function(tempC) {
  const fahrenheit = (tempC * 9/5) + 32;
  const result = Math.round(fahrenheit * 10) / 10;
  return result;
};

// console.log(convertToCelsius(55));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
