const hourMinute = document.querySelector("h2#clock span:first-child");
const second = document.querySelector("h2#clock span:last-child");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    hourMinute.innerText= `${hours}:${minutes}`;
    second.innerText = seconds;
}

getClock(); // 먼저 getClock() 호출해주지 않으면 1초동안은 초기값인 00:00:00로 표시
setInterval(getClock, 1000); 