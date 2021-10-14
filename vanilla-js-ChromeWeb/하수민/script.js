const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === "blue"){
        newColor = "tomato";
    } else{
        h1.className = clickedClass; //최초의 클래스네임은 사라짐
    }
}

h1.addEventListener("click", handleTitleClick);

