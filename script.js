// let favMovie = "Tiger";
// let guess = prompt("Enter fav movie name");
// let quit = "quit";
// while((guess != favMovie)&&(guess != quit)){
//     console.log("Try again");
//     guess = prompt("wrong,Enter fav movie name again");
// }
// if(guess == favMovie){
//     console.log("Great");
// }

// Object Literals

// let student = {
//     name: "Aman",
//     age: 22,
//     city: "Banglore"
// };

// Generate a random number
// let num = Math.random();
// num = num*10;
// num = Math.floor(num);
// num = num + 1; // for 1 to 10

// // shorthand for this
// let random = Math.floor(Math.random() * 10) + 1;

// let sum = function(a,b){
//     let add = a + b;
//     console.log(add);
// }
// sum(1,2);

// Forms
let form = document.querySelector("form");
let inp = document.querySelector("input");

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert(`Hi ${inp.value} Welcome to Facebook!`);

});