const clockContainer = document.querySelector('js-clock');
const clockSpan = document.querySelector('.clockspan');

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  //월은 0월부터 시작하기 때문에 +1
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockSpan.innerText = `${year}.${month+1}.${day} 
  ${ hours<10 ? `0${hours}` : hours }:${minutes<10? `0${minutes}` : minutes}:${seconds<10? `0${seconds}` : seconds}`
  
}

function init() {
getTime();
setInterval(getTime, 1000);
}

init();
