const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    //const username = loginInput.value;
    event.preventDefault(); // 브라우저기 가본 동작을 하지 못하도록 막음 - 새로고침
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("clicked!"); // 모든 동작 막음. OK 눌러야 동작 실행. 이제 안씀
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
