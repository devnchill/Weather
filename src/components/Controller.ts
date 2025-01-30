import { fetchWeather, showGif } from "./Api";
import { determineWeatherCondition } from "../utils/DetermineWeather";

console.log("hell");

const searchBar: HTMLInputElement = document.getElementById(
  "search_bar",
) as HTMLInputElement;

const searchButton: HTMLButtonElement = document.querySelector(
  "search_bar+button",
) as HTMLButtonElement;

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
        const weatherCondition = determineWeatherCondition(weatherInfo);
        showGif(weatherCondition);
      } catch (err) {
        console.log("failed to fetch weather data or Gif:", err);
      }
    }
  }
}

if (searchBar && searchButton) {
  searchButton.addEventListener("click", setupModal);
  searchBar.addEventListener("keyup", setupModal);
}
