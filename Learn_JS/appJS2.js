let para1 = document.createElement('p');
para1.innerText = "Hey i'm red!";
document.querySelector("body").append(para1);
para1.classList.add('pColor');

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3";
document.querySelector("body").append(h3);
h3.classList.add('h3Color');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('para2');
h1.innerText = "I'm in a div";
para2.innerText = "Me too!";
div.append(h1);
div.append(para2);
div.classList.add('box');
document.querySelector("body").prepend(div);

let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click me!"; 
document.querySelector("body").append(input, btn);
input.placeholder = "username";
