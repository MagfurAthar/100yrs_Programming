let multipleGreet = function(func, count){ // Higher Order Function---
    for(let i=0; i<count; i++){
        func();
    }
}

let Greet = function(){
   console.log(`The Great Otoman Ampire.`); 
}

multipleGreet(Greet, 20);