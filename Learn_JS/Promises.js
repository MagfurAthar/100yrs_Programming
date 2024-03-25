function SaveDB(data, success, failure) {
    let InternetSpeed = Math.floor(Math.random() * 10) + 1;
    if (InternetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}

SaveDB("BIT Ranchi", () => {
    // console.log("The data was saved : ", data);
    console.log("Success : The data was saved");
    SaveDB("Hello", () => {
        console.log("Success2 : The data was saved");

    }, () => {
        console.log("Failure2 : Opps! Week Connection...");
        SaveDB("Bye", () => {
            console.log("Success3 : The data was saved");

        }, () => {
            console.log("Failure3 : Opps! Week Connection...");

        })
    })
}, () => {
    console.log("Failure : Opps! Week Connection...");
})