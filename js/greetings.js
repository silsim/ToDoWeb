const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greenting = document.querySelector("#greenting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const inputUserName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, inputUserName);
  paintGreetings(inputUserName);
}

function paintGreetings(inputUserName) {
  greenting.innerText = `${inputUserName}`;
  greenting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}