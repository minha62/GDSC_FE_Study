const API_KEY="cb885eb10dc47392d636edbc7b0c5380";
const weather=document.querySelectorAll("#weather span");


function onGeoOk(position){
  const lat=position.coords.latitude;
  const lon=position.coords.longitude; 
  const url_weather=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const url_air=`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  let air_quality=""

  fetch(url_weather).then(response=>response.json()).then(data=>{
    weather[0].innerText=`${data.weather[0].main} / ${data.main.temp} °C`;
    weather[2].innerText="@"+data.name;
  });

  fetch(url_air).then(response=>response.json()).then(data=>{
    const air_index=data.list[0].main.aqi;
    

    switch (air_index) {
      case 1:
        air_quality = "Good";
        break;

      case 2:
        air_quality ="Fair";
        break;
    
      case 3:
        air_quality = "Moderate";
        break;
    
      case 4:
        air_quality = "Poor";
        break;
    
      case 5:
        air_quality = "Very Poor";    
    }
    weather[1].innerText="Air : "+air_quality;

  });



}

function onGeoError(){
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

