const userForm = document.querySelector('.user-form');
const userInput = document.querySelector('.user-input');
const userH4 = document.querySelector('.user-h4');


function loadName(){
  const currentUser = localStorage.getItem('currentUser');
  console.log(currentUser);
  if (currentUser === null) {
    askName();
  
  }else {
    showName(currentUser);

  }
}
function showName(text){
  userH4.classList.add('showing');
  userH4.innerText = `Hello ${text}`;
  userInput.classList.remove('showing');
  userForm.classList.remove('showing');
}
function askName(){
    userForm.classList.add('showing');
    userInput.classList.add('showing');
    userInput.focus();
    userForm.addEventListener('submit', handleSubmit);
}
function handleSubmit(event){
  event.preventDefault();
  const currentValue = userInput.value
  showName(currentValue);
  setName(currentValue);
}
function setName(text){
  localStorage.setItem('currentUser', text);
}


loadName();
//
