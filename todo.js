const form = document.querySelector('.js-todoForm');
const input = document.querySelector('.todoInput');
const ul = document.querySelector('.js-todoList');
const li = document.querySelector('li');
input.focus();
form.addEventListener('submit', handleSubmit);

let todos = [];  //계속 변화할 값이기 때문에 let

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  showTodo(currentValue);
  input.value= ``;
}

function showTodo(value) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const liId = todos.length + 1;

  span.textContent = value;
  li.appendChild(span);
  ul.appendChild(li);
  li.id = liId;

  const delBtn =document.createElement('i');
  delBtn.setAttribute('class', 'far fa-trash-alt');
  li.appendChild(delBtn);
  delBtn.addEventListener('click',deleteTodo);
  
  const todoObj = {
    text: value,
    id: liId
  }
    todos.push(todoObj);
    setTodos();
   
}

function deleteTodo(event){
  //console.log(event.target.parentNode);   //target 실제로 event가 발생한 것이 무엇인지 
                                            //그 target의 부모node는 누구인지 
  //console.dir(event.target);   //dir로 하면 객체+ method를 보여준다. 
                                 //어떤 method가 있는지 보고싶은데 log로 안나오면 dir로) 
  const deleteBtn = event.target.parentNode;
  //ul.removeChild(deleteBtn);   //이건 부모node의 자식 node로 지울 수 있느 방법이고 
  deleteBtn.remove(); //굳이 removeChild를 사용하지 않아도 remove()로 직접 지울수도 있음 
  
  const clearTodos = todos.filter( function(clear) {
      //console.log(clear);        //function이 주는 object data
      //console.log(clear.id)        //그중에 id 인덱스만 
      //console.log(deleteBtn.id);   //del버튼을 누른 tag의 id만 
                                   //그런데 이 둘의 type이 다름. number와 string 비교가 안됨. 
      console.log(typeof(clear.id), typeof(deleteBtn.id));
      return clear.id !==Number(deleteBtn.id);    //Number로 감싸줬음. 숫자 vs 숫자 
  })
      console.log(clearTodos);
      todos = clearTodos;
      setTodos();
}

function setTodos() {
  localStorage.setItem('todos' , JSON.stringify(todos));
}

function loadTodos() {
  const localGet = localStorage.getItem('todos');

  if (localGet !== null) {
    const parseGet = JSON.parse(localGet);
    //console.log(parseGet);
    parseGet.forEach(function (todo) {   //forEach가 자동으로 주는 값이 todo임. 
    //console.log(todo);
    showTodo(todo.text);   // text값만 showTodo의 value로 들어감 

   });
    }
}

loadTodos();   //자동실행이기 떄문에 시작하자마자 기존의 localStorage를 불러옴
               //localStorage에 같은key값에 자료를 입력하면 기존의 data는 지워짐 



