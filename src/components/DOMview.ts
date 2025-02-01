import { WeatherParams } from "../utils/DetermineWeather";
import { celToFe, felToCe } from "../utils/TempConverter";
function populateTable(
  param: WeatherParams,
  location: string,
  isFarhenite: boolean,
) {
  const { dew, windspeed, humidity } = param;
  let temp = param.temp;
  if (isFarhenite) {
    temp = celToFe(param.temp);
  }
  (document.getElementById("location") as HTMLTableCellElement).textContent =
    location;
  (document.getElementById("temp") as HTMLTableCellElement).textContent =
    temp.toString();
  (document.getElementById("dew") as HTMLTableCellElement).textContent =
    dew.toString();
  (document.getElementById("windspeed") as HTMLTableCellElement).textContent =
    windspeed.toString();
  (document.getElementById("humidity") as HTMLTableCellElement).textContent =
    humidity.toString();
}

function updateTemp(temp: number) {
  (document.getElementById("temp") as HTMLTableCellElement).textContent =
    temp.toString();
}
export { populateTable, updateTemp };
