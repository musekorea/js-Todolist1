const API_KEY = "08534ac244fcfd168c6f362552431a93";
const weather = document.querySelector('.js-weather');

function loadCoords() {
  const loadedCoords = localStorage.getItem('coords');
   if(loadedCoords === null){
    askforCoords();
    

  } else{
    const parseCoords = JSON.parse(loadedCoords);
    //console.log(parseCoords.latitude, parseCoords.longitude);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    
  }
}

function askforCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuceess, handleGeoError);
  }

function handleGeoSuceess(position){
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {latitude : latitude ,
                     longitude: longitude}
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
  console.log(coordsObj);
}
function handleGeoError(){
  console.log('Cant access geo location');
}
function saveCoords(coordsObj){
  localStorage.setItem('coords', JSON.stringify(coordsObj));
}

function getWeather(lat, lon){
  console.log(lat, lon);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=zh_cn`).then(function(response){
    return(response.json());
  }).then(function(json){
    console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature}℃  @${place}`;
  })
}

loadCoords();

