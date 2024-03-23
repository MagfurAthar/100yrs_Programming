let currentDisplay = '';
// document.querySelector("#display").value = currentDisplay;
function display(){
    document.querySelector("#display").value = currentDisplay;
}

const Clear = document.getElementById("btnC");
Clear.onclick = function(){
    currentDisplay ='';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const one = document.getElementById("btn1");
one.onclick = function(){
    currentDisplay +='1';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const two = document.getElementById("btn2");
two.onclick = function(){
    currentDisplay +='2';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const Plus = document.getElementById("Plus");
    Plus.onclick = function(){
        currentDisplay +='+';
        display();
        // document.querySelector('#display').value = currentDisplay;
    }
const three = document.getElementById("btn3");
three.onclick = function(){
    currentDisplay +='3';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const four = document.getElementById("btn4");
four.onclick = function(){
    currentDisplay +='4';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const Minus = document.getElementById("Minus");
    Minus.onclick = function(){
        currentDisplay +='-';
        display();
        // document.querySelector('#display').value = currentDisplay;
    }
const five = document.getElementById("btn5");
five.onclick = function(){
    currentDisplay +='5';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const six = document.getElementById("btn6");
six.onclick = function(){
    currentDisplay +='6';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const btnX = document.getElementById("btnX");
btnX.onclick = function(){
    currentDisplay +='*';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const seven = document.getElementById("btn7");
seven.onclick = function(){
    currentDisplay +='7';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const eight = document.getElementById("btn8");
eight.onclick = function(){
    currentDisplay +='8';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const btnDiv = document.getElementById("btnDiv");
btnDiv.onclick = function(){
    currentDisplay +='/';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const nine = document.getElementById("btn9");
nine.onclick = function(){
    currentDisplay +='9';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const zero = document.getElementById("btn0");
zero.onclick = function(){
    currentDisplay +='0';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
const Dot = document.getElementById("btnDot");
Dot.onclick = function(){
    currentDisplay +='.';
    display();
    // document.querySelector('#display').value = currentDisplay;
}
let Equalto = document.querySelector('#btnEqual');
Equalto.onclick = function(){
    let result = eval(currentDisplay);
    currentDisplay = result;
    // document.querySelector('#display').value = result;
    display();
}