// function SaveDB(data, success, failure) {
//     let InternetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (InternetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }



// SaveDB("BIT Ranchi", () => {
//     // console.log("The data was saved : ", data);
//     console.log("Success : The data was saved");
//     SaveDB("Hello", () => {
//         console.log("Success2 : The data was saved");

//     }, () => {
//         console.log("Failure2 : Opps! Week Connection...");
//         SaveDB("Bye", () => {
//             console.log("Success3 : The data was saved");

//         }, () => {
//             console.log("Failure3 : Opps! Week Connection...");

//         })
//     })
// }, () => {
//     console.log("Failure : Opps! Week Connection...");
// })




// ---------------------Use of Promises------------------------------
function SaveDB(data) {
    return new Promise((resolve, reject) => {
        let InternetSpeed = Math.floor(Math.random() * 10) + 1;
        if (InternetSpeed > 4) {
            resolve("Succes : Data was saved");
            // console.log(data);
        } else {
            reject("Failure : Week Connection...");
        }

    });
}

// SaveDB("Hello");
// let request = SaveDB("My Phone..") // request = Promise object
// request
//     .then(() => {
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//         console.log(request);
//     });

// or simply ---------------------
// SaveDB("My call..")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


// Promises chaining---------------------------------
// example---------------
// SaveDB("My call..")
//     .then(() => {
//         console.log("Data1 saved");
//         SaveDB("Hello check").then(() => {
//             console.log("Data2 saved");
//             SaveDB("Bye Bye").then(() => {
//                 console.log("Data3 saved");
//             })
//         })
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });

// right syntax of promise chaining-----------------
SaveDB("My call 1")
    .then((result) => {
        console.log("Promise1 resolved");
        console.log("Result of Promise : ", result);
        return SaveDB("My call 2");
    })
    .then((result) => {
        console.log("Promise2 resolved");
        console.log("Result of Promise : ", result);
        return SaveDB("My call 3");
    })
    .then((result) => {
        console.log("Promise3 resolved");
        console.log("Result of Promise : ", result);
    })
    .catch((error) => {
        console.log("Promise was rejected");
        console.log("Error of Promise : ", error);
    });




