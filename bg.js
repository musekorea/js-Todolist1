const body = document.querySelector('body');

const imgNumbers = 3; //내가 가지고 있는 이미지의 갯수
const randomNumber = getRandom();

function getRandom() {
  const number = Math.floor(Math.random() * imgNumbers);
  //console.log(number);
  return number;
}

function showImage() {
  const image = new Image();
  //document.createElement("img") 같은 것임 
  image.src = `images/${randomNumber+1}.jpg`;
  //console.log(randomNumber+1);
  body.appendChild(image);  // 부모태그안에 가장 아래에 생성
  //body.prepend(image)  부모태그안에 가장 위에 생성 
  image.classList.add('bgImage');
  
}

showImage();
