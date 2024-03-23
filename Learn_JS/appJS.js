let smImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smImages.length; i++) {
    console.log(smImages[i]);
    console.dir(smImages[i].src);
}

for(let j = 0; j<smImages.length; j++){
    smImages[j].src = "../Learn_HTML/spiderman_img.png";
    console.log(`value of image no. ${j} is changed`);
}

// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1].innerText = "pqr");

console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("h1").innerText = "Ironman");
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector(".box .boxLink"));
console.dir(document.querySelector("div a")); //it shows same results as above.
console.dir(document.querySelectorAll("div a")); //it shows all the anchor tags in that div
console.dir(document.querySelectorAll("p"));

//////////////////////////////////////
// change styling by javascript------- 
let links = document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++){
//     links[i].style.color = "red";
//     links[i].style.backgroundColor = "yellow";
// }
// another method-----------
for(link of links){ //'style' property for styling is functional only in inline CSS..
    link.style.color = "purple";
    link.style.backgroundColor = "yellow";
}

// let border = document.querySelector(".box");
// border.style.backgroundColor = "red";


