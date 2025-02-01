import { celToFe, felToCe } from "./TempConverter";

interface WeatherParams {
  temp: number;
  dew: number;
  windspeed: number;
  humidity: number;
}

function determineWeatherCondition(
  param: WeatherParams,
  unit = "metric",
): string {
  let temp = param.temp;
  if (unit !== "metric") {
    temp = celToFe(param.temp);
  }
  const { dew, windspeed, humidity } = param;
  const isHot: boolean = temp > 30;
  const isCold: boolean = temp < 10;
  const isHumid: boolean = humidity > 70;
  const isDewClose: boolean = temp - dew < 3;
  const isWindy: boolean = windspeed > 20;

  if (isHumid && isDewClose) {
    console.log("rainy");
    return "rainy";
  } else if (isHot) {
    console.log("summer");
    return "summer";
  } else if (isCold) {
    console.log("winter");
    return "winter";
  } else if (isWindy) {
    console.log("windy");
    return "windy";
  } else {
    console.log("normal");
    return "normal";
  }
}

export { WeatherParams, determineWeatherCondition };
