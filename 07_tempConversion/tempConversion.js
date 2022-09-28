const ftoc = function(tempFahrenheit) {
  tempC = ((tempFahrenheit - 32) * 5) / 9;
  return Math.round(tempC * 10) / 10;
};

const ctof = function(tempCelsius) {
  tempF = (tempCelsius * (9/5)) + 32;
  return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
