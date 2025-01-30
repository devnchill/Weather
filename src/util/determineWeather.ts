function determineWeatherCondition(
  temp: number,
  dew: number,
  humidity: number,
  windspeed: number,
) {
  const isHot: boolean = temp > 30;
  const isHumid: boolean = humidity > 70;
  const isDewClose: boolean = temp - dew < 3;
  const isWindy: boolean = windspeed > 20;

  if (isHumid && isDewClose && !isHot) {
    return "rain";
  } else if (isHot && !isHumid) {
    return "hot";
  } else if (isWindy) {
    return "windy";
  } else {
    return "mild";
  }
}
