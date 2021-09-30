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

const age=prompt("how old are you")
console.log(age)
console.log(typeof age) //prompt get input as string
console.log(parseInt(age)) //parseInt change string to Int