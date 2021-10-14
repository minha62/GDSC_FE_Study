const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    /**
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)){  // 초기의 클래스네임 계속 남아있음
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
    */
    h1.classList.toggle("clicked"); //위으 코드를 toggle 사용해서 한 줄로 만들 수 있음
}

h1.addEventListener("click", handleTitleClick);

