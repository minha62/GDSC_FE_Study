const API_KEY = "21ebd5fed5348c67acdc88fb2c3fea69";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const airUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url) // fetch : 실제로 URL에 갈 필요 없이 JS가 대신 URL 불러줌
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:nth-child(2)");
            const img = document.createElement("img");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}°C`;
            img.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            document.querySelector("#weather").prepend(img);
    }); 
    fetch(airUrl)
        .then(response => response.json())
        .then(data => {
            const air = document.querySelector("#weather p");
            var pm10 = parseInt(data.list[0].components.pm10);
            if(pm10 > 0){
                air.innerText = "Good";
            } else if (pm10 > 25){
                air.innerText = "Fair";
            } else if (pm10 > 50){
                air.innerText = "Moderate";
            } else if (pm10 > 90){
                air.innerText = "Poor";
            } else {
                air.innerText = "Very Poor";
            }
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
