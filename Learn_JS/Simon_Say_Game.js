let gameSeq = [];
let userSeq = [];
let scores = [];
let highScore = 0;
let highest = 0;
let started = false;
let level = 0;
let btns = ["btn1", "btn2", "btn3", "btn4"];
let h3 = document.querySelector('h3');
let btnPlay = document.querySelector('.play');

btnPlay.addEventListener("click", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

// document.addEventListener("keypress", function () {
//     if (started == false) {
//         started = true;
//         levelUp();
//     }
// });

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
};
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
};
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
    // console.log(gameSeq);
};

function checkAns(indx) {
    if (userSeq[indx] === gameSeq[indx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 100);
        }
    } else {
        scores.push(level);
        highScore = Math.max(...scores);
        if (level > highScore) {
            localStorage.getItem("highScore", highScore);
        } else {
            highest = localStorage.setItem("highScore", highScore);
        }
        h3.innerHTML = `Game over! <br>Your score : ${level}<br>High score : ${highest}<br>Press <i>Play</i> button to restart`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "black";
        }, 150);
        reset();
    }
};
function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length - 1);
};

let allBtns = document.querySelectorAll('.btn');

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
// localStorage.setItem(highScore);