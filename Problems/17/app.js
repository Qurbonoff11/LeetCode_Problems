const convertTemperature = (celsius) => {
  let Kelvin = celsius + 273.15;
  let Fahrenheit = celsius * 1.8 + 32;

  return [Kelvin, Fahrenheit ];
};

console.log(convertTemperature(36.5));
