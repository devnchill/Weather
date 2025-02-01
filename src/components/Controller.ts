import { fetchWeather, showGif } from "./Api";
import { determineWeatherCondition } from "../utils/DetermineWeather";
import { populateTable } from "./DOMview";

console.log("hell");

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
  isFarhenite = false;
} else {
  isFarhenite = true;
}

async function setupModal(e: KeyboardEvent | MouseEvent) {
  if (
    (e instanceof KeyboardEvent && e.key === "Enter") ||
    e instanceof MouseEvent
  ) {
    const location = searchBar.value.trim();
    if (location) {
      try {
        const weatherInfo = await fetchWeather(location);
        console.log(weatherInfo);
        if (isFarhenite) populateTable(weatherInfo, location);
        const weatherCondition = determineWeatherCondition(weatherInfo, "uk");
        showGif(weatherCondition);
      } catch (err) {
        console.log("failed to fetch weather data or Gif:", err);
      }
    }
  }
}

searchButton.addEventListener("click", setupModal);
searchBar.addEventListener("keyup", setupModal);
