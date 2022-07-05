const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos"

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos))
}

function deletToDo(event) {
  const deletList = event.target.parentElement;
  deletList.remove();
  toDos = toDos.filter( (toDo) => toDo.id !== parseInt(deletList.id) );
  saveToDos();
}


function paintToDo(newToDoInput) {
  const li = document.createElement("li");
  li.id = newToDoInput.id
  const span =document.createElement("span");
  span.innerText = newToDoInput.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deletToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDoInput = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDoInput,
    id: Date.now(),
  };
  toDos.push(newToDoObj); 
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); /*"["a", "b", "c"]"*/

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); /*["a", "b", "c"]*/
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo) 
  /*parsedToDos의 배열에 있는 각가의 아이템들에 paintToDo함수을 적용*/
}


/*
  => 는 화살표 함수라고 함 function 이름 (){내용}과 같음
/*
JSON.stringify(value, replacer, space) 자바스크립트의 값을 JSON문자열로 변환
value(필수): JSON 문자열로 변환할 값이다.(배열, 객체, 또는 숫자, 문자 등이 될 수 있다.)
replacer(선택): 함수 또는 배열이 될 수 있다. 이 값이 null 이거나 제공되지 않으면, 객체의 모든 속성들이 JSON 문자열 결과에 포함된다.

JSON.parse() 문자열 객체를 JSON객체로 변환시켜줌
*/

/*
forEach() 배열의 각각의 아이템에 함수를 실행
*/

/*
[1, 2, 3, 4].filter()지우고 싶은 아이템을 제외하고 새 배열을 만듬 여전히 예전의 배열은 남아있음
*/
