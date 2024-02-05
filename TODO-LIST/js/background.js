const body = document.body;

const images = ["1.jpg", "2.jpg"];

randomImage = `img/` + images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = `url('${randomImage}')`;
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";
