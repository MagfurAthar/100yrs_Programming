let OddEvenFactory = function(request){
    if(request == "odd"){
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    }else if(request == "even"){
        return function (n){
           console.log(n%2==0);
        } 
    }else{
        console.log("Wrong Request!!");
    }
}

let request = "odd"; //even
let func = OddEvenFactory(request);
console.log(func(2));
console.log(func(11));
