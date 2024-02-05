const API_KEY = "";

function showWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("span#weather");
      weather.innerText = `📍${data.name} / ${data.main.temp}° / ${data.weather[0].main}`;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      document.getElementById("weatherIcon").classList.remove("hidden");
      document.getElementById("weatherIcon").src = iconUrl;
    });
}
function showWeatherError() {
  alert("Cannot find your location.");
}

navigator.geolocation.getCurrentPosition(showWeather, showWeatherError);
