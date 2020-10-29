const KelvinsToCelsius = (temp: number): number => {
  return temp - 273.15;
};

const KelvinsToFahrenheit = (temp: number) => {
  return ((temp - 273.15) * 9) / 5 + 32;
};

export { KelvinsToCelsius, KelvinsToFahrenheit };
