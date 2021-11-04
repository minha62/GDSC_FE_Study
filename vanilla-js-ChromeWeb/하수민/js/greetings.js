const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); // id 앞에 #

const HIDDEN_CLASSNAME = "hidden"; // string만 표함된 변수는 대문자로 표기. string 저장하고 싶을때 사용.
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault(); // 브라우저기 가본 동작을 하지 못하도록 막음 - 새로고침
    loginForm.classList.add(HIDDEN_CLASSNAME); // username 입력하면 form 사라짐

    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}'s To Do`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greetings
    paintGreetings(savedUsername);
}
