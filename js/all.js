// clcok 
const clock = document.querySelector("#clock");

function time() {
  const date = new Date();
  const hours =  String(date.getHours()).padStart(2, "0");
  const minutes =  String(date.getMinutes()).padStart(2, "0");
  const seconds =  String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
time();
setInterval(time, 1000);

// login
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const printing = document.querySelector("#printing");
const bookMarkList = document.querySelector("#book-list");

const USERNAME = "usernme"
const CLASSNAME_HIDDEN = "hidden"

function loginFormSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME, userName);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  printingUserName(userName);
}

function printingUserName(userName) {
  printing.innerText = `Hello ${userName}`;
  printing.classList.remove(CLASSNAME_HIDDEN)
  bookMarkList.classList.remove(CLASSNAME_HIDDEN)
}

loginForm.addEventListener("submit", loginFormSubmit);

const savedUserName = localStorage.getItem(USERNAME);

if (savedUserName === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
} else {
  printingUserName(savedUserName);
}

// todolist
const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")
let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos))
}

function deletToDoList(event) {
  const deletTarget = event.target.parentElement;
  deletTarget.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deletTarget.id));
  saveToDos();
}

function printingToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deletToDoList);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function toDoFormSubmit(event) {
  event.preventDefault();
  const inputToDoValue = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: inputToDoValue, id: Date.now()
  };
  toDos.push(newToDoObj);
  printingToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoFormSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(printingToDo);
}

// weather
const API_KEY = "0b2ef7b2e070e956b1b3d9d72cd99a23";

function onGeoOk(event) {
  const lat = event.coords.latitude;
  const lon = event.coords.longitude;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(apiUrl).then(response => response.json().then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].description} / 기온:${data.main.temp}`;
    city.innerText = data.name;}))
};


function onGeoError() {
  alert("Can't find you, No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// quotes
const quotes = [
  {
    qutoe: "It is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    qutoe: "There are better starters than me but I’m a strong finisher.",
    author: "Usain Bolt",
  },
  {
    qutoe: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    qutoe: "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    qutoe: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: "Angelina Jolie",
  },
  {
    qutoe: "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin Luther King, Jr",
  },
  {
    qutoe: "Grind Hard, Shine Hard.",
    author: "Dwayne Johnson",
  },
  {
    qutoe: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author: "Estée Lauder",
  },
  {
    qutoe: "There is nothing in the world so irresistibly contagious as laughter and good humor.",
    author: "Charles Dickens",
  },
  {
    qutoe: "Love all, trust a few. Do wrong to none.",
    author: "William Shakespeare",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.qutoe;
author.innerText = todaysQuote.author;


//background
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)]
const body = document.body;

function changeBgImg() {
  body.style.backgroundImage = `url(img/${chosenImage})`;
}
changeBgImg();









