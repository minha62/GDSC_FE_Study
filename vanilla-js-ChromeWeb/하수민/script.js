const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    //const username = loginInput.value;
    event.preventDefault(); // 브라우저기 가본 동작을 하지 못하도록 막음 - 새로고침
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

// onLoginSubmit() - 브라우저가 () 보는 순간 바로 실행시켜버림 