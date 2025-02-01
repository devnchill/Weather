import { fetchWeather, showGif } from "./Api";
import { determineWeatherCondition } from "../utils/DetermineWeather";
import { populateTable } from "./DOMview";

const searchBar: HTMLInputElement = document.getElementById(
  "search_bar",
) as HTMLInputElement;

const searchButton: HTMLButtonElement = document.querySelector(
  "#search_bar+button",
) as HTMLButtonElement;

const toggleTemp: HTMLInputElement = document.getElementById(
  "checkbox",
) as HTMLInputElement;

let isFarhenite = false;
if (toggleTemp.checked) {
  isFarhenite = true;
}

async function setupModal(e: KeyboardEvent | MouseEvent) {
  let unit = "metric";
  if (
    (e instanceof KeyboardEvent && e.key === "Enter") ||
    e instanceof MouseEvent
  ) {
    const location = searchBar.value.trim();
    if (location) {
      try {
        if (toggleTemp.checked) unit = "us";
        const weatherInfo = await fetchWeather(location, unit);
        console.log(weatherInfo);
        populateTable(weatherInfo, location, unit);
        const weatherCondition = determineWeatherCondition(weatherInfo, unit);
        showGif(weatherCondition);
      } catch (err) {
        console.log("failed to fetch weather data or Gif:", err);
      }
    }
  }
}

searchButton.addEventListener("click", setupModal);
searchBar.addEventListener("keyup", setupModal);
toggleTemp.addEventListener("click", setupModal);
