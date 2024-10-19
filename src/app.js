import { weatherKey } from "../env.js";
console.log(weatherKey);

function getWeather() {
  const city = document.getElementById("city").ariaValueMax;
  if (!city) {
    alert("Please enter location");
    return;
  }
}
