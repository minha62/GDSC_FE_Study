const API_KEY = "21ebd5fed5348c67acdc88fb2c3fea69";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url) // fetch : 실제로 URL에 갈 필요 없이 JS가 대신 URL 불러줌
        .then(response => response.json())
        .then(data => { 
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); 
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);