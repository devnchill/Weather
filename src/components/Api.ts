/*
 * Interface for weather data returned by visualcrossing API
 */
interface WeatherData {
  dew: number;
  humidity: number;
  pressure: number;
  temp: number;
  windspeed: number;
}

/*
 * Fetches weather data for a given location from the Visual Crossing API.
 *
 * @param {string} location - The location for which to fetch weather data.
 * @returns {Promise<WeatherData>} A promise that resolves to the weather data.
 * @throws {Error} If the API request fails or the response is not OK.
 */

async function fetchWeather(location: string): Promise<WeatherData> {
  const API: string = "UHZLMQ56GWWLE6NGQXQA524PB";
  const url: string = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today/?key=${API}&unitGroups=uk&elements=dew,pressure,temp,windspeed,humidity`;
  try {
    const response: Response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`oops unexpected error ${response.status}`);
    }
    const objData = await response.json();
    console.log(objData);
    return objData.currentConditions;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/*
 * @param {string} weather determine weather based on different factors retrieved through api and display gif based on that.
 * @returns {Promise<Void>} A promise that resolves once Gif is displayed
 * @throws {error} If api fails or response is not ok.
 */

async function showGif(weather: string): Promise<void> {
  const BODY: HTMLBodyElement = document.body as HTMLBodyElement;
  console.log("BODY found", BODY);

  const API: string = "fA0vEse7wLBDwjfSMLqUeLbaTNhiK45t";
  const url: string = `https://api.giphy.com/v1/gifs/translate?api_key=${API}&s=${weather}`;
  try {
    const response: Response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`oops unexpected error ${response.status}`);
    }
    const responseObj = await response.json();
    console.log(responseObj.data.images.original.url);
    BODY.style.backgroundImage = `url(${responseObj.data.images.original.url})`;
    console.log("done setting up gif");
  } catch (error) {
    console.log(error);
  }
}

export { fetchWeather, showGif };
