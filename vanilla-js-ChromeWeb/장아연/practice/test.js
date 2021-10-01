const player={
    name:"ayeon",
    point:10,
    fat:false,
};

console.log(player)
console.log(player.name)
console.log(player["name"])

//change property value
player.fat=true //change Boolean value
console.log(player.fat)
player.point+=15 //change numerical value by cal-
console.log(player.point)

//add property and its value
player.lastName="ayeon"
console.log(player)


function sayHello(nameOfPerson,age){
    console.log("Hello!! my name is "+nameOfPerson+
    " and I'm "+age+" years old");

}
sayHello("nico",20)
sayHello("ayeon",40)
sayHello("yummy",90)

function plus(FirstNum,SecondNum){
    console.log(FirstNum+SecondNum)
}
plus(1,7)
plus(-1,1)
plus(6*4,10)

function divide(FirstNum,SecondNum){
    console.log(FirstNum/SecondNum)
}
divide(10,5)
divide(1,5)
divide(3,2)

const player_1={
    name:"nico",
    sayHello:function(otherPersonName){
        console.log("hello! "+ otherPersonName);
    },
    
};

console.log(player_1.name)
player_1.sayHello("ayeon");

const age=20;
function calculateKrAge(ageofForegineer){
    //ageofForegineer+=2
    return ageofForegineer+2
}

const KrAge=calculateKrAge(64);
console.log(KrAge)


const calculator={
    plus:function(a,b){
        return a+b
    },
    subtract:function(a,b){
        return a-b
    },
    multi:function(a,b)
{
    return a*b
}}

const plusResult=calculator.plus(10,4)
const subResult=calculator.subtract(10,4)
const multiResult=calculator.multi(10,4)

const age2=prompt("how old are you")
console.log(age2)
//prompt get input as string
console.log(typeof age2) 
 //parseInt change string to Int
console.log(parseInt(age2))
//parseInt 한 후 변수의 값이 숫자가 아니라면 해당 문자열은 숫자로 변경 불가능한 문자열임

const a=Number("123ads123")
console.log(a) //NaN
const b=parseInt("123asd123")
console.log(b) //123


const age1=parseInt(prompt())
if (isNaN(age1) || age1<0){
    console.log("Plz write a real positive number");
}
else if(age1<18){
    console.log("You are too young");
}
else if (age1>=18 && age1<=50){
    console.log("You can drink");
}
else if (age1>50 && age1<=80){
    console.log("You should exercise");
}
else if (age1===100){
    console.log("wow you are wise");
}
else if (age1>80){
    console.log("you can do whatever you want");
}

const title=document.getElementById("title");
title.innerText="Got You"
console.log(title)





//# 3.3
//listen for event

const title1=document.querySelector(".hello h1")
console.log(title1)
title1.style.color="blue"

//1. set which subject and event you are caring for
//2. make function which operate with event occuring
//3.  make them into addEventListener
//function that is included in addEventlistner is called "callback function"

function handleTitleClick(){
    console.log("title was clicked!");
    title1.style.color="pink"
}
title1.addEventListener("click",handleTitleClick)

//# 3.4

const title2=document.querySelector("div.hello h1")
console.log(title2)


function handleMouseEnter(){
    title2.innerText="Mouse is here!"
}

function handleMouseLeave(){
    title2.innerText="Mouse is gone!"
}

title2.addEventListener("mouseenter",handleMouseEnter)
title2.addEventListener("mouseleave",handleMouseLeave)


//3.5
//add event하는 또 다른 방법/표현법
title1.addEventListener("click",handleTitleClick)
//title1.onclick=handleTitleClick; 

title2.addEventListener("mouseenter",handleMouseEnter)
//title2.onmouseenter=handleMouseEnter;

title2.addEventListener("mouseleave",handleMouseLeave)
//title2.onmouseleave=handleMouseLeave;

//event regarding about window
function handleWindowResize(){
    document.body.style.backgroundColor="red";
}
function handleWindowCopy(){
    alert("Copier!!");
}
window.addEventListener("resize",handleWindowResize)
window.addEventListener("copy",handleWindowCopy)

//event regarding about wifi

function handleWindowOffline(){
    alert("SOS!! NO WIFI");
}

function handleWindowOnline(){
    alert("Good!! WIFI Connected");
}

window.addEventListener("offline",handleWindowOffline)
window.addEventListener("online",handleWindowOnline)


//3.6
const h1=document.querySelector("div.hello h1")

function handleTitleClick(){
    const currentColor=h1.style.color;//get color
    let newColor;

    if (currentColor==="blue"){
        newColor="tomato";//set color
    }
    else{
        newColor="blue";
    }
    h1.style.color=newColor;
}

function handleMouseEnter(){
    h1.innerText="Mouse is here!";
}
h1.addEventListener("click",handleTitleClick)