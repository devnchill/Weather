interface WeatherParams {
  temp: number;
  dew: number;
  windspeed: number;
  humidity: number;
}

// here unit is either metric or us
function determineWeatherCondition(param: WeatherParams, unit: string): string {
  const { temp, dew, windspeed, humidity } = param;
  const isMetric = unit === "metric";

  const isHot = !isMetric ? temp > 86 : temp > 30;
  const isCold = !isMetric ? temp < 50 : temp < 10;
  const isWindy = !isMetric ? windspeed > 20 : windspeed > 32;
  const isHumid = humidity > 70;
  const isDewClose = temp - dew < 3;

  if (isHumid && isDewClose) {
    return "rainy";
  } else if (isHot) {
    return "summer";
  } else if (isCold) {
    return "winter";
  } else if (isWindy) {
    return "windy";
  } else {
    return "normal";
  }
}

export { WeatherParams, determineWeatherCondition };
