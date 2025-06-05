// Number 
let age = 25; 
const year = 1958; 
let negative = -8; 
const disition = 7; 

// Math opetations 
const sum = 1+3; 
const diff = 7-4; 
const product = 5*0; 
const quotient = 8/4;
const power = 5**9;
const mod = 50%10;

// Variables
let name = "mammad";
let agee = 7;
const yearr = 1390;
var lastName = "mammadi"

// Counter Variable
let counter = 0; 
counter = counter+1; 
 counter+=1;
counter++
let dif = 1;
dif = dif +1  
dif-=1;
dif--;

// Booleans
let isTure = true;
let isFalse = false;

// practice 
let five = 5;
let two = 2;
let result = five * two + 3
console.log(result);

let isSunny = true;
let isWarm = false;
console.log(`Can we go outside? ${isSunny} && ${isWarm}`);

let person1 = 7;
let person2 = 3;
console.log(person1+person2*2); //answer 13

let count = 5;
count++;
count+=2;
console.log(count); //answer 8

let num1 = 10;
let num2 = 5;
let check = num1>num2 && num2>8;
console.log(check); // false

//------------------------------------

//String
let nome = "Mitra";
let message = "Hello!";
let empty = "";

// String are indexed
let word = "Hello world";
console.log(word[0]);
console.log(word[6]);

//String Methods
let names= "emili";
console.log(names.toUpperCase()); //EMILI
let family= "LORD"
console.log(family.toLowerCase());
let messy = "     Hello World     ";
console.log(messy.trim());
 
// String Length
let fruit = "banana";
console.log(fruit.length);

//camelCase
let userName= "MitraHashemzadeh";
let totalScore = 100;
let isLoggedIn = true;

//practice
let greeting = "             GOOD MORNING!    ";
console.log(greeting.trim().toLowerCase()); //answer "good morning!"
 
let fullName= "john DOE";
console.log(fullName.toUpperCase()); // answer "JOHN DOE"

let lang = "javaScript";
console.log(lang[0]);  //answer j
console.log(lang[4]);  //answer S
console.log(lang.length);  //ansewr 10

//practice
let str = "HELLO!";
console.log(str.toLowerCase());  //answer "hello!"

let string = "      javaScript    "
console.log(str.trim().length);  //answer "javaScript" 10

let fruits = "apple";
console.log(fruits[2]);  //answer p

let msg = "hello world!"
console.log(msg.toUpperCase() === "HELLO WORLD");  //true

let emailAddress= "openai@gmail.com"

//Mini Project
let rawName = "      mITra HasheMzadeH     ";
let cleanName = rawName.trim().toLowerCase();
  
console.log(cleanName);

let a = 5;
let b = 3;
let total = a*b;
console.log(`result is : ${total}`);  //answer 15

let firstName = "          mitra      ";
console.log(firstName.trim().toUpperCase());

let number = 0;
number += 1;
number +=2;
let resultt = number>2;
console.log(resultt);  //true

let greeting1 = "HELLO JS!";
console.log(greeting1[6]);  //S

let fruitt = "banana";
console.log(fruitt.length - 1);
console.log(fruitt[fruitt.length -1]);

// String Method
let text = "Hello JavaScript";
console.log(text.indexOf("Hello"));  //0

let java= "javaScript";
console.log(java.slice(1));  //avaScript
console.log(java.slice(2,6));  //vaSc

let strName = "I like cats. Cats are cute."
console.log(strName.replace("cats", "Dogs"));
let sttr = "apple apple apple";
console.log(sttr.replaceAll("apple","orange"));

let world = "world";
console.log(world.repeat(5));

Math.floor(Math.random()*10)

//Mini Practice
let phrase = "Hello JavaScript!";
console.log(phrase.indexOf("S"));  //10
console.log(phrase.slice(2,5));  //llo
console.log(phrase.replace("Java", "Type"));  //Hello TypeScript!
console.log("Hi".repeat(3));  //Hi Hi Hi

let random = Math.floor(Math.random()*5)+1;

// ----------------------

// alert("Warining!")
// let promptt = prompt("What is your name?")
let inPut = "42px"
let num3 = parseInt(inPut);
console.log(num3);

// Conditionals
let ages = 20;
if (ages>= 18) {
    console.log("Adult");
    
}else if (ages >= 13){
    console.log("Teenager");
    
}else {
    console.log("Child");
    
} 

//Nesting
let score = 85;
if(score>50){
    if(score>80){
        console.log("Excellent");
        
    }else{
        console.log("Good");
        
    }
}else{
    console.log("Fail");
    
}

//Ternary Operator
let years= 17;
let type = years>=18 ? "Adult" : "Minor";
console.log(type);

//Mini practice
let x = 5;
console.log(x==="5");  //false

let temp = 30;
if(temp > 25 && temp < 35){
    console.log("Nice Weather!");  //Nice Weatheer
    
}

// let use = prompt("write a number")
// you must write parseInt becuase user maybe write number with world
// let usee = parseInt(use)
// if (usee>=10) {
//     console.log("Big");
    
// }else if (usee< 10){
//     console.log("Small");
    
// }else{
//     console.log("write number");
    
// }


let sorce = ""
let Ternary = sorce === "" ? "Empty" : "Not Empty"
console.log(Ternary);
  
 
// Practice
// let users = prompt("Write a Number");
// let uses = parseInt(users);
// if (uses>0) {
//     console.log("Positive");
    
// }else if (uses<0){
//     console.log("Negative");
    
// }else if (uses=== 0){
//     console.log("Zero");
    
// }else{
//     console.log("Please write a number");
    
// }
  

// let getNumberFromUser = prompt("Write your score")
// let scoreExam = parseInt(getNumberFromUser)
// if(scoreExam>=60){
//     if(scoreExam>=90){
//         console.log("Excellent");
        
//     }else{
//         console.log("Passed");
        
//     }
// }else{
//     console.log("Failed");
    
// }


// let checkAdult = prompt("Write your age")
// let parseIntAdult = parseInt(checkAdult)
// if (parseIntAdult>18){
//     let idCard = prompt("Do you have a Id card?")
//     if(idCard === "yes"){
//         console.log("Adult with Id");
          
//     }else if (idCard === "no"){
//         console.log("Adult without Id");
        
//     }else {
//         console.log("Please answer all question");
        
//     }
// }else{
//     console.log("underage");
    
// }
  

let birth = 20;
let birthDay = birth >= 18 ? "Adult" : "Minor"
console.log(birthDay);

// let userInput = prompt("Enter a word :")
// let answerUser = userInput === "" ? "Empty" : "Thank you!"
// console.log(answerUser);


let calssName = "Ali"
let classScore = 78;
if (classScore> 50 && calssName.length<5) {
    // console.log("Good Job!");
    
}else if (classScore>50 && calssName.length>= 5){
    // console.log(`Good Effore ${calssName}`);
    
}else {
    // console.log("Try Again!");
    
}

let city = "Tehran";
let trimCity = city.trim();
let toUpperCaseCity = trimCity.toUpperCase()
let capital = toUpperCaseCity === "TEHRAN" ? "capital" : "write capital of IRAN";
// console.log(capital);


// let mathRandom = Math.floor(Math.random()*10)
// let promptUseer = prompt("write a number below")
// let userNum = parseInt(promptUseer)
// if (userNum>10 || userNum< 0 || !userNum ){
//   console.log("write a number between 0 to 10");
// }else if (mathRandom === userNum) {
//     console.log("Wow! You guessed it!");
// } else {
//     console.log("Try again");
// }


// Falsy & Truthy
// let falsy = [fale , 0 , "", null , undefined , NaN]
// Everything is truthy
  

// Switch Statement
let color = "blue";
switch (color){
    case "red": console.log("Stop!");
    break;
    case "blue" : console.log("Go!");
    break;
    default: console.log("Unknown color");
      }


// Array
let allFruits = ["apple","banana","orange"]


// Method in Array
console.log(allFruits.length);  //.length

console.log(allFruits[0]);  // index

console.log(allFruits.push("grap"));  //.push

console.log(allFruits.pop());  //.pop

console.log(allFruits.unshift("mango"));  //.unshift

console.log(allFruits.shift());  //.shift

let newFruite = allFruits.concat(["pear", "melon"])  //.concat

console.log(allFruits.includes("banana"));  //.includes

console.log(allFruits.indexOf("orange"));  //.indexOf

console.log(allFruits.reverse());  //.reverse

let some = allFruits.slice(1,3)  //.slice 

console.log(newFruite.splice(1,1,"pineapple"));  //.splice

let sumNum = [1,4,8,2]
console.log(sumNum.sort());
console.log(sumNum.sort((a,b)=> a-b));

// Mini Quiz
let allName = "";
if (allName) {
    console.log(`Hello ${allName}`);
    
}else {
    console.log("please enter your name.");
    
}


let day = "Friday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
case "Friday":
    console.log("Almost weekend!");
    break;

    default:
        console.log("Just a day");
        
        break;
}

let numb = [10,20,30]
numb[1] = 50;
console.log(numb);

let colors = ["red", "green"];
colors.push("blue");
colors.shift();
console.log(colors);

let animals = ["dog", "cat", "parrot","lion"];
console.log(animals.includes("cat"));
console.log(animals.slice(1,3));

let scores = [100, 25, 300, 75];
console.log(scores.sort());
console.log(scores.sort((a,b)=>b-a));
console.log(scores.sort((a,b)=>a-b));

let input1 = null;
let msgg = input1 ? "Thanks!" : "Empty input"
console.log(msgg);























































