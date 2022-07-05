//setTimeout(함수, 시간) 지정한 시간후 함수가 시작 반복 안함
//setInterval(함수, 시간) 지정한 시간이 지난후 함수를 반복
//"1".padStart(문자열의 길이,"0")  지정한 문자열의 길이로 표시 만약 지정한길이보다 적으면 앞에"0"으로 표시
//"1".padEnd(문자열의 길이,"0")  지정한 문자열의 길이로 표시 만약 지정한길이보다 적으면 뒤에"0"으로 표시
//String() 문자로 바꿔줌
const clock = document.querySelector("h2#clock")
const days = document.querySelector("h2#days")

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" })
  const weekday = date.toLocaleString("en-US", { weekday: 'short'})
  const day = date.getDate()

  days.innerText = `${weekday}. ${month} ${day}`
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
