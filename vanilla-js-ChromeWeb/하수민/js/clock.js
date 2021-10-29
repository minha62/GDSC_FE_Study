const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 먼저 getClock() 호출해주지 않으면 1초동안은 초기값인 00:00:00로 표시
setInterval(getClock, 1000); 