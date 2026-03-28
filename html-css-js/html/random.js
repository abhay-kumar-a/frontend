// get the number 
// let gameNum = 65;

// let userNum =prompt("Guess the game number : ");

// while(userNum!=gameNum)
// {
//     userNum =prompt("You ertered wrong number , please Guess right number : ")
// }
// console.log("Congraatulations, you entered the right number : ");

// string 

let employee  = {
    name : "Abhay",
    age : 23,
    number : 344567789
}

for( let i in employee)
{
    console.log("key "+ i + " value " + employee[i])
}

let name = "abhay";

for (let i of name)
{
    console.log(i);
}

//-----------------------------------
//-------------  strings  ------------------
let userName1 = "Niharika";
let address = "Lucknow";
console.log(userName1.length  + " " +  address.length);

console.log(userName1[0]);

// string template literals 

const penObject  = {
    name : "pen",
    price : 10
}

let penDiscription = `price of ${penObject.name} is ${penObject.price} reuppes`;
console.log(penDiscription);

//------------ write a program -> user wil enter fullName  , and print a user name base on start with @ , full name and lenght of name
// name = abhay kumar , so user name will be like = @abhaykumar10;

let userFullName  = prompt("Enter full name : ");
userFullName = userFullName.replace(" ","");
let userNameObj = {
    specialSymbol : "@",
    name : userFullName,
    lenght : userFullName.length
}
let userName  = `${userNameObj.specialSymbol}${userNameObj.name}${userNameObj.lenght}`
console.log(userName);

// array's 

// collections of items 

let marksArr = [34,45,86,2,5];
marksArr[2] = 23;
console.log(marksArr);

let heros = ["Mithun" , "SniDevel" ,"Varun Dhava" , "Hritikr"];
console.log(heros);

// looping over array 

for( let hero of heros)
{
    console.log(hero);
}


// find the average of marks 

let sum =0;
for(let mark of marksArr)
{
    sum+=mark;
}
console.log(`total marks : ${sum} average of marks : ${sum/marksArr.length}`);

// change array while apply the offer 

let values  = [250, 650 ,300 ,900 ,5];
let offer = 10;
let i =0;
for(let value  of values)
{
    let finalValue =value - value/10;
    values[i]= finalValue;
    i++;
}
console.log(values.toString());

// function 

function printName(name) {
    console.log("this is " +  name)
}
printName("abhay");

let num1 = 343453;
function printSum(num1 , num2 , num3)
{
    return num1 + num2 + num3;
}
let sum1 = printSum(3,5,4);
console.log(sum1);

// arrow function.
let printProduct = (num1 , num2 , num3) =>
{
    return num1 * num2 *num3;
}

console.log("product  " + printProduct(2,4,5));

let nameGroup  = (names) =>  console.log(names);
nameGroup("Nihal")


