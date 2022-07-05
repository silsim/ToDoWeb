const API_KEY = "0b2ef7b2e070e956b1b3d9d72cd99a23";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json()
  .then(data => {
    const temperature = document.getElementById("temp");
    const icon = document.getElementById("icon");
    const city = document.getElementById("city");
    const weather = document.getElementById("weather-main");
    weather.innerText = `${data.weather[0].description}`;
    temperature.innerHTML = `${data.main.temp} <sup>o</sup>`;
    icon.style.backgroundImage = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
    city.innerText = data.name;
  }
  ));
};

function onGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);




/*
navigator.geolocation.getCurrentPosition();
*/
/*
getCurrentPosition(onGeoOk성공했을때 실행할 함수. onGeoError에러가 났을때 실행할 함수 );
*/
/*
fetch(url) 

EX_
if(url) { fetch(url).then(function(response){return response.text();}).then(function(html){ document.getElementById('info').innerHTML = html; }); }

fetch는 api를 불러오고, 정보를 내보내주는 함수라고 한다.
fetch 함수에 쓰여지는 method는 get과 post가 있는데 설정을 따로 안해주면 기본적으로 get으로 설정된다.
fetch는 서버와 비동기 요청방식중에 하나인데, 대표적인 비동기 요청방식중에 하나인 Ajax의 방식 중 하나이다.
then의 역할은 함수 실행이 끝나면 그 다음으로 할 일을 정해주는 것이다. fetch(서버주소)는 웹에서 '이 서버주소로 요청 좀' 의미를 가지고 있고, then이 붙는다면 '이 요청 끝나면 이것 좀 해주라!' 라는 뜻 같다.

*/