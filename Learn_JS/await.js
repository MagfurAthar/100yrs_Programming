function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);

    });
}

async function demo() { // 'await' keyword can only be used under the async functions.
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
};

demo();