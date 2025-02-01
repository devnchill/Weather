import { WeatherParams } from "../utils/DetermineWeather";

function populateTable(param: WeatherParams, location: string, unit: string) {
  const { temp, dew, windspeed, humidity } = param;
  const tempUnit = unit === "us" ? "°F" : "°C";
  const windUnit = unit === "us" ? "mph" : "km/h";
  (document.getElementById("temp") as HTMLTableCellElement).textContent =
    `${temp} ${tempUnit}`;
  (document.getElementById("location") as HTMLTableCellElement).textContent =
    location;
  (document.getElementById("dew") as HTMLTableCellElement).textContent =
    `${dew} ${tempUnit}`;
  (document.getElementById("windspeed") as HTMLTableCellElement).textContent =
    `${windspeed} ${windUnit}`;
  (document.getElementById("humidity") as HTMLTableCellElement).textContent =
    `${humidity} %`;
}

export { populateTable };
