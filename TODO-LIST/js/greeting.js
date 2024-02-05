loginForm = document.querySelector("#login-form");
loginInput = document.querySelector("#name");
greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function showLogin(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const inputName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputName);
  showGreeting(inputName);
}

function showGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const userName = localStorage.getItem(USERNAME_KEY);

if (userName) {
  showGreeting(userName);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", showLogin);
}
