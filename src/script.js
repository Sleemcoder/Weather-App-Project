function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  let cityName = document.querySelector(".city-name");
  cityName.innerHTML = `${cityInput.value}`;
}
let submitForm = document.querySelector("form");
submitForm.addEventListener("submit", displayCity);

function formatDate() {
  let now = new Date();
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();

  let currentTime = document.querySelector("#time");

  currentTime.innerHTML = `${day} ${hour}:${minute}`;
}
formatDate();

function displayTemperature(response) {
  let temperatureElement = document.querySelector(".weather-result");

  let temperature = Math.round(response.data.temperature.current);

  temperatureElement.innerHTML = `${temperature}`;
}

let apiKey = "ed6f304o4cd5aea5t3450ab6a43ac42a";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
