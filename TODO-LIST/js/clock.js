clock = document.querySelector("h1#clock");

function showClock() {
  const date = new Date();
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour > 12 ? hour - 12 : hour;

  clock.innerText = `${(hour < 10 ? "0" : "") + hour}:${
    (minutes < 10 ? "0" : "") + minutes
  }:${(seconds < 10 ? "0" : "") + seconds} ${period} `;
}

showClock();
setInterval(showClock, 1000);
