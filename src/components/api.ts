interface WeatherData {
  dew: number;
  temp: number;
  humidity: number;
  visibility: number;
  windspeed: number;
  pressure: number;
}
async function fetchWeather(location: string): Promise<WeatherData> {
  const API: string = "API";
  const url: string = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today/?key=${API}&elements=dew,pressure,temp,visibility,windspeed,humidity`;
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

async function showGif(weather: string): Promise<void> {
  const IMG: HTMLImageElement = document.getElementById(
    "demo",
  ) as HTMLImageElement;
  const API: string = "API";
  const url: string = `https://api.giphy.com/v1/gifs/translate?api_key=${API}&s=${weather}`;
  try {
    const response: Response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`oops unexpected error ${response.status}`);
    }
    const objData = await response.json();
    IMG.src = objData.data.images.original.url;
  } catch (error) {
    console.log(error);
  }
}

export { fetchWeather, showGif };
