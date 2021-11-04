const year = document.querySelector("h1#date span:nth-child(1)");
const month = document.querySelector("h1#date span:nth-child(2)");
const date = document.querySelector("h1#date span:nth-child(3)");
const day = document.querySelector("h1#date span:nth-child(4)");

const today = new Date();
const options = {weekday : 'short'};
const years = String(today.getFullYear());
const months = String(today.getMonth()).padStart(2, "0");
const dates = String(today.getDay()).padStart(2, "0");
const days = new Intl.DateTimeFormat('en-US', options).format(today.getDay());



year.innerText = `${years}/`;
month.innerText = `${months}/`;
date.innerText = `${dates}`;
day.innerText = ` ${days}`;